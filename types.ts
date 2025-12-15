
export enum TretaSeverity {
  LOW = 'Estagiário fazendo commit na master',
  MEDIUM = 'Discussão de Tabs vs Spaces',
  HIGH = 'Senior de 2 anos cagando regra',
  CRITICAL = 'Layoff via Zoom',
  NUCLEAR = 'Rewrite completo em Rust'
}

export interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
}

export interface WikiEntry {
  id: string;
  title: string;
  date: string;
  author: string;
  severity: TretaSeverity;
  content: string;
  tags: string[];
  likes: number;
  prLink?: string;
  source: 'LOCAL' | 'GITHUB';
  comments?: Comment[];
}

export type ViewState = 'LANDING' | 'HOME' | 'LIVE' | 'CONTRIBUTING' | 'WIKI_ENTRY' | 'ABOUT';
