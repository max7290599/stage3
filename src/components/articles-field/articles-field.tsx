import { FC } from 'react';
import { ArticlesProps } from '../../models/props';
import Article from '../article/article';

import './articles-field.css';

const ArticlesField: FC<ArticlesProps> = (props) => {
  const { articles } = props;
  return (
    <div className="cards-field">
      {articles.map((article, i) => (
        <Article key={i.toString()} article={article} />
      ))}
    </div>
  );
};

export default ArticlesField;
