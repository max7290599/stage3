import { AxiosResponse } from 'axios';
import { ChangeEvent, FC, useState } from 'react';
import { Get200ArticlesModel } from '../../models/articles';
import { GetApiProps } from '../../models/props';
import axios from '../../server/api';

// import './search-bar.scss';

const API_KEY = 'd369957caf7c4e9385f79aa13c0ac7b4';

const SearchBar: FC<GetApiProps> = (props): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<Get200ArticlesModel> = await axios.get(
        `v2/everything?q=${searchValue}&sortBy=${props.sort}&page=${props.page}&pageSize=${props.pageSize}&apiKey=${API_KEY}`,
      );
      props.setArticles(response.data.articles);
      props.setAllPage(response.data.totalResults);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Искать здесь..."
        value={searchValue}
        onChange={handleChange}
        disabled={isLoading}
      />
      <button className="search-btn" disabled={isLoading} type="submit">
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
};

export default SearchBar;
