export interface ArticlesModel {
  author: string;
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  description: string;
}

export interface Get200ArticlesModel {
  articles: ArticlesModel[];
  totalResults: number;
}

export interface ArticleCardModel {
  article: ArticlesModel;
}
