import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './books/booksSlice';

export const configureStore = () => {
  return configureStore({
    reducer: {
      books: bookReducer,
    },
  });
}