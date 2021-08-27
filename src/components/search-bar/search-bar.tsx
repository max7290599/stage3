import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreModel } from '../../models/store';
import { getParamNews } from '../../redux/action';
import { SortByProps } from '../../models/props';

import './search-bar.css';

const SearchBar: FC<SortByProps> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: StoreModel) => state.isLoading);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.getNews();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(getParamNews('searchValue', value));
  };

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input
        className="input-search"
        type="text"
        data-testid="search"
        placeholder="Искать здесь..."
        onChange={handleChange}
        disabled={isLoading}
      />
      <button data-testid="btn-search" className="btn-search" disabled={isLoading} type="submit">
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
};

export default SearchBar;
