import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/';
const BookstoreAPI = `${URL}bookstoreApi/apps/g0f12CrowfGQT7YQc0k9`;

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BookstoreAPI}/books`);
      if (data) {
        const books = Object.entries(data).map(([itemId, book]) => ({
          itemId,
          ...book[0],
        }));
        return books;
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const postBook = createAsyncThunk(
  'books/postBook',
  async (payload, thunkAPI) => {
    try {
      await axios.post(`${BookstoreAPI}/books`, payload);
      const { title, author, category } = payload;
      return {
        title, author, category, itemId: payload.item_id,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${BookstoreAPI}/books/${payload}`);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const initialState = {
  books: [],
  isLoading: false,
  isCreating: false,
  isRemoving: false,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getBooks.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      books: payload || state.books,
    }),
    [getBooks.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [postBook.pending]: (state) => ({
      ...state,
      isCreating: true,
    }),
    [postBook.fulfilled]: (state, { payload }) => ({
      ...state,
      isCreating: false,
      books: [...state.books, payload],
    }),
    [postBook.rejected]: (state) => ({
      ...state,
      isCreating: false,
    }),
    [removeBook.pending]: (state, { meta: { arg: isRemoving } }) => ({
      ...state,
      isRemoving,
    }),
    [removeBook.fulfilled]: (state, { payload }) => ({
      ...state,
      isRemoving: false,
      books: state.books.filter((book) => book.itemId !== payload),
    }),
    [removeBook.rejected]: (state) => ({
      ...state,
      isRemoving: false,
    }),
  },
});

export default bookSlice.reducer;
