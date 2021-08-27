import { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { SortByProps } from '../../models/props';
import { getParamNews } from '../../redux/action';

import './sort-by.css';

const SortBy: FC<SortByProps> = (props): JSX.Element => {
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getParamNews(e.target.name, e.target.value));
    props.getNews();
  };

  return (
    <div className="container-sort">
      <h2 className="title-sort">Sort By...</h2>
      <div className="container-input-sort">
        <label className="custom-radio" htmlFor="relevancy">
          <input
            className="input-sort"
            type="radio"
            data-testid="relevancy"
            value="relevancy"
            name="sortBy"
            onChange={handleChange}
          />
          <span>Relevancy</span>
        </label>
        <label className="custom-radio" htmlFor="popularity">
          <input
            className="input-sort"
            type="radio"
            data-testid="popularity"
            value="popularity"
            name="sortBy"
            onChange={handleChange}
          />
          <span>Popularity</span>
        </label>
        <label className="custom-radio" htmlFor="publishedAt">
          <input
            className="input-sort"
            type="radio"
            value="publishedAt"
            data-testid="publishedAt"
            name="sortBy"
            onChange={handleChange}
          />
          <span>Published</span>
        </label>
      </div>
    </div>
  );
};

export default SortBy;
