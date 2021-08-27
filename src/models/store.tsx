import { ArticlesModel } from './articles';

export interface StoreModel {
  isLoading: boolean;
  articles: ArticlesModel[];
  page: number;
  pageSize: number;
  searchValue: string;
  sortBy: string;
  totalResults: number;
}
