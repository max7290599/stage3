import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ArticlesProps } from '../../models/props';
import './articles-field.css';

const ArticlesField: FC<ArticlesProps> = (props) => {
  const { articles } = props;
  return (
    <div className="cards-field">
      {articles.map((article, i) => (
        <div className="article" key={i.toString()}>
          <h2 className="title">{article.title}</h2>
          <img alt="" className="article-img" src={article.urlToImage} />
          <p className="description">
            {article.description}
            <NavLink className="link" to={`/details/${article.title}`}>
              Read more...
            </NavLink>
          </p>
          <div className="container-author">
            <p>
              <span>Published: </span>
              {article.publishedAt}
            </p>
          </div>
        </div>
        // <Article key={i.toString()} article={article} />
      ))}
    </div>
  );
};

export default ArticlesField;
