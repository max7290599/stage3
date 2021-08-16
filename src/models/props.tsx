import { ArticlesModel } from './articles';

export interface SortByProps {
  setSortBy(value: string): void;
}

export interface PageProps {
  setPage(value: number): void;
  page: number;
  allPage: number;
  pageSize: number;
  setPageSize(value: number): void;
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
