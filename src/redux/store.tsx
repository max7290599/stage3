import { configureStore } from '@reduxjs/toolkit';
import reducerNews from './reducer';

const store = configureStore({
  reducer: reducerNews,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
