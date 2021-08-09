import { ChangeEvent, FC } from 'react';
import { SortByProps } from '../../models/props';

const SortBy: FC<SortByProps> = (props): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setSortBy(e.target.value);
  };

  return (
    <div>
      <label htmlFor="relevancy">
        <input type="radio" value="relevancy" name="sort-by" onChange={handleChange} />
        relevancy
      </label>
      <label htmlFor="popularity">
        <input type="radio" value="popularity" name="sort-by" onChange={handleChange} />
        popularity
      </label>
      <label htmlFor="publishedAt">
        <input type="radio" value="publishedAt" name="sort-by" onChange={handleChange} />
        publishedAt
      </label>
    </div>
  );
};

export default SortBy;
