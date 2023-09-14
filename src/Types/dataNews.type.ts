export interface DataNews {
  data: News[];
}
export interface News {
  src?: string;
  content?: string;
  title?: string;
  publishedAt?: string;
  author?: string;
  sourceName?: Source;
  description?: string;
  url?: string;
  urlToImage?: string;
}

interface Source {
  id: string;
  name: string;
}

export type NewsType = {
  src?: string;
  title?: string;
  publishedAt?: string;
  author?: string;
  sourceName?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
};
