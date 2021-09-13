import { configureStore } from '@reduxjs/toolkit';
import reducerNews from './reducer';

export const store = configureStore({
  reducer: reducerNews,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
