import { FC } from 'react';
import { ArticleCardModel } from '../../models/articles';

import './article.css';

const Article: FC<ArticleCardModel> = (props) => {
  const { article } = props;
  return (
    <div className="article">
      <h2 className="title">{article.title}</h2>
      <img alt="" className="article-img" src={article.urlToImage} />
      <p className="description">
        {article.description}
        <a className="link" href={article.url}>
          Read more...
        </a>
      </p>
      <div className="container-author">
        <p>
          <span>Author: </span>
          {article.author}
        </p>
        <p>
          <span>Published: </span>
          {article.publishedAt}
        </p>
      </div>
    </div>
  );
};

export default Article;
