export interface Favoutite {
  id: string;
  path: string;
  name: string;
}

export interface FilesResponse {
  files: string[];
  folders: string[];
}

export interface History {
  paths: string[];
  index: number;
}
