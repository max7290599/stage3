import { ChangeEvent, FC } from 'react';
import { SortByProps } from '../../models/props';

import './sort-by.css';

const SortBy: FC<SortByProps> = (props): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setSortBy(e.target.value);
  };

  return (
    <div className="container-sort">
      <h2 className="title-sort">Sort By...</h2>
      <div className="container-input-sort">
        <label className="custom-radio" htmlFor="relevancy">
          <input
            className="input-sort"
            type="radio"
            value="relevancy"
            name="sort-by"
            onChange={handleChange}
          />
          <span>Relevancy</span>
        </label>
        <label className="custom-radio" htmlFor="popularity">
          <input
            className="input-sort"
            type="radio"
            value="popularity"
            name="sort-by"
            onChange={handleChange}
          />
          <span>Popularity</span>
        </label>
        <label className="custom-radio" htmlFor="publishedAt">
          <input
            className="input-sort"
            type="radio"
            value="publishedAt"
            name="sort-by"
            onChange={handleChange}
          />
          <span>Published</span>
        </label>
      </div>
    </div>
  );
};

export default SortBy;
