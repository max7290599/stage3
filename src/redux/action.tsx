import { ArticlesModel } from '../models/articles';
import {
  FAIL_GETTING_NEWS,
  GET_PARAM_NEWS,
  GET_TOTAL_RESULTS_NEWS,
  RECEIVE_NEWS,
  REQUEST_NEWS,
} from './types';

export function fetchNews() {
  return { type: REQUEST_NEWS };
}

export function receiveNews(article: ArticlesModel[]) {
  return { type: RECEIVE_NEWS, payload: article };
}

export function failGettingNews() {
  return { type: FAIL_GETTING_NEWS };
}

export function getParamNews(nameParam: string, value: string | number) {
  return { type: GET_PARAM_NEWS, payload: value, name: nameParam };
}

export function getTotalResultsNews(value: number) {
  return { type: GET_TOTAL_RESULTS_NEWS, payload: value };
}
