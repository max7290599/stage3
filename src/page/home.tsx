import { AxiosResponse } from 'axios';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../server/api';
import ArticlesField from '../components/articles-field/articles-field';
import Pagination from '../components/pagination/pagination';
import SearchBar from '../components/search-bar/search-bar';
import SortBy from '../components/sort-by/sort-by';
import { Get200ArticlesModel } from '../models/articles';
import { StoreModel } from '../models/store';
import { fetchNews, receiveNews, getTotalResultsNews, failGettingNews } from '../redux/action';

const API_KEY = 'd369957caf7c4e9385f79aa13c0ac7b4';

const Home: FC = () => {
  const articles = useSelector((state: StoreModel) => state.articles);
  const searchValue = useSelector((state: StoreModel) => state.searchValue);
  const sortBy = useSelector((state: StoreModel) => state.sortBy);
  const page = useSelector((state: StoreModel) => state.page);
  const pageSize = useSelector((state: StoreModel) => state.pageSize);
  const totalResults = useSelector((state: StoreModel) => state.totalResults);
  const dispatch = useDispatch();

  const getNews = async (): Promise<void> => {
    dispatch(fetchNews());
    try {
      const response: AxiosResponse<Get200ArticlesModel> = await axios.get(
        `v2/everything?q=${searchValue}&sortBy=${sortBy}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`,
      );
      dispatch(receiveNews(response.data.articles));
      dispatch(getTotalResultsNews(response.data.totalResults));
    } catch (error) {
      dispatch(failGettingNews());
      console.error(error);
    } finally {
      dispatch(failGettingNews());
    }
  };

  return (
    <div>
      <SearchBar getNews={getNews} />
      <SortBy getNews={getNews} />
      <ArticlesField articles={articles} />
      <Pagination totalResults={totalResults} pageSize={pageSize} page={page} getNews={getNews} />
    </div>
  );
};

export default Home;
