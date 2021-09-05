import { StoreModel } from '../models/store';
import {
  FAIL_GETTING_NEWS,
  GET_PARAM_NEWS,
  GET_TOTAL_RESULTS_NEWS,
  RECEIVE_NEWS,
  REQUEST_NEWS,
} from './types';

export const initialState: StoreModel = {
  isLoading: false,
  articles: [
    {
      author: '',
      title: '',
      url: '',
      urlToImage: '',
      publishedAt: '',
      content: '',
      description: '',
    },
  ],
  page: 1,
  sortBy: 'relevancy',
  pageSize: 20,
  totalResults: 1,
  searchValue: '',
};

function reducerNews(state = initialState, action: any) {
  switch (action.type) {
    case REQUEST_NEWS: {
      return { ...state, isLoading: true };
    }
    case RECEIVE_NEWS: {
      return { ...state, isLoading: false, articles: action.payload };
    }
    case FAIL_GETTING_NEWS: {
      return { ...state, isLoading: false };
    }
    case GET_PARAM_NEWS: {
      return { ...state, [action.name]: action.payload };
    }
    case GET_TOTAL_RESULTS_NEWS: {
      return { ...state, totalResults: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default reducerNews;
