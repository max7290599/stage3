import { ArticlesModel } from './articles';

export interface SortByProps {
  getNews(): Promise<void>;
}

export interface GetApiProps {
  setArticles(value: ArticlesModel[]): void;
  sort: string;
  page: number;
  setAllPage(value: number): void;
  pageSize: number;
}

export interface ArticlesProps {
  articles: ArticlesModel[];
}

export interface DetailsArticleState {
  setDetailsArticle(value: ArticlesModel[]): void;
}

export interface DetailsArticleProps {
  articles: ArticlesModel[];
  cardId: string;
}

export interface PaginationProps {
  getNews(): Promise<void>;
  page: number;
  pageSize: number;
  totalResults: number;
}
