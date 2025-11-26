
export interface RepoItem {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  date: string;
  author: string;
  license: string;
  format: string;
  doi: string;
  citation: string;
  // Detailed Content Fields
  resumen: string;
  objetivos: string;
  objetivosSteps: string[];
  aplicaciones: string;
  downloadUrl: string;
  // Validation Fields
  validated?: boolean;
  validationDetails?: string;
}

export interface PublicationItem {
  id: number;
  title: string;
  category: 'Articles' | 'Conferences' | 'Other';
  type: string; // 'pdf' | 'link'
  description: string;
  image: string;
  date: string;
  author: string;
  venue: string;
  doi?: string;
  url: string;
}
