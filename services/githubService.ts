
import { WikiEntry, TretaSeverity } from "../types";
import { STATIC_TRETAS } from "../data/tretas";

// CONFIGURATION
// To make this work for your own repo, change these values!
const REPO_OWNER = 'bolhadev'; 
const REPO_NAME = 'wiki'; 

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
  }
}

export const getStaticTretas = (): WikiEntry[] => {
  return STATIC_TRETAS;
};

export const fetchTretasFromGitHub = async (): Promise<WikiEntry[]> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=open&labels=treta`);
    
    if (!response.ok) {
      throw new Error("GitHub API rate limit or Repo not found");
    }

    const issues: GitHubIssue[] = await response.json();

    return issues.map(issue => {
      // Determine severity from labels or random guess if missing
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
        source: 'GITHUB'
      };
    });

  } catch (error) {
    console.warn("Falha ao buscar do GitHub", error);
    return [];
  }
};
