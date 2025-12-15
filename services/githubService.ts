
import { WikiEntry, TretaSeverity, Comment } from "../types";
import { STATIC_TRETAS } from "../data/tretas";

// CONFIGURATION
// To make this work for your own repo, change these values!
const REPO_OWNER = 'bmsrk'; 
const REPO_NAME = 'BolhaDevTretasWiki'; 

interface GitHubIssue {
  number: number;
  title: string;
  body: string;
  created_at: string;
  user: {
    login: string;
  };
  labels: {
    name: string;
  }[];
  reactions: {
    '+1': number;
    'rocket': number;
    'eyes': number;
  };
  pull_request?: any;
}

interface GitHubComment {
  id: number;
  user: {
    login: string;
  };
  created_at: string;
  body: string;
}

export const getStaticTretas = (): WikiEntry[] => {
  return STATIC_TRETAS;
};

export const fetchTretasFromGitHub = async (): Promise<WikiEntry[]> => {
  try {
    // Fetch all open issues (no label filter)
    // Note: Only fetches first 100 issues. Pagination not implemented yet.
    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=open&per_page=100`);
    
    if (!response.ok) {
      throw new Error("GitHub API rate limit or Repo not found");
    }

    const issues: GitHubIssue[] = await response.json();

    // Filter out pull requests (GitHub API returns PRs in issues endpoint)
    const actualIssues = issues.filter(issue => !issue.pull_request);

    // Fetch comments for all issues with rate limit protection
    // Process in smaller batches to avoid overwhelming the API
    const batchSize = 5;
    const issuesWithComments = [];
    
    for (let i = 0; i < actualIssues.length; i += batchSize) {
      const batch = actualIssues.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(async (issue) => {
          const comments = await fetchCommentsForIssue(issue.number);
          return { issue, comments };
        })
      );
      issuesWithComments.push(...batchResults);
      
      // Small delay between batches to be respectful of rate limits
      if (i + batchSize < actualIssues.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    return issuesWithComments.map(({ issue, comments }) => {
      // Determine severity from labels or default to MEDIUM
      const severityLabel = issue.labels.find(l => l.name.startsWith('severity:'))?.name.split(':')[1];
      let severity = TretaSeverity.MEDIUM;
      
      // Map label text to Enum
      if (severityLabel) {
         const key = Object.keys(TretaSeverity).find(k => k === severityLabel.toUpperCase());
         if (key) severity = TretaSeverity[key as keyof typeof TretaSeverity];
      }

      // Filter tags (labels that aren't 'treta' or severity)
      const tags = issue.labels
        .filter(l => l.name !== 'treta' && !l.name.startsWith('severity:'))
        .map(l => l.name);

      return {
        id: issue.number.toString(),
        title: issue.title,
        date: issue.created_at.split('T')[0],
        author: issue.user.login,
        severity: severity,
        content: issue.body || 'Sem descrição. O caos fala por si só.',
        tags: tags.length > 0 ? tags : ['uncategorized'],
        likes: (issue.reactions['+1'] + issue.reactions['rocket'] + issue.reactions['eyes']),
        prLink: `https://github.com/${REPO_OWNER}/${REPO_NAME}/issues/${issue.number}`,
        source: 'GITHUB',
        comments: comments
      };
    });

  } catch (error) {
    console.warn("Falha ao buscar do GitHub", error);
    return [];
  }
};

const fetchCommentsForIssue = async (issueNumber: number): Promise<Comment[]> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${issueNumber}/comments`);
    
    if (!response.ok) {
      console.warn(`Failed to fetch comments for issue ${issueNumber}`);
      return [];
    }

    const githubComments: GitHubComment[] = await response.json();

    return githubComments.map(comment => ({
      id: comment.id.toString(),
      author: comment.user.login,
      date: comment.created_at.split('T')[0],
      content: comment.body
    }));
  } catch (error) {
    console.warn(`Error fetching comments for issue ${issueNumber}`, error);
    return [];
  }
};
