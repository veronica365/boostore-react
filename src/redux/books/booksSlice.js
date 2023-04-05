import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/';
const BookstoreAPI = `${URL}bookstoreApi/apps/g0f12CrowfGQT7YQc0k9`;

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BookstoreAPI}/books`);
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
      const { data } = await axios.post(`${BookstoreAPI}/books`, payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newState = { ...state };
      newState.books = state.books.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
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
      isLoading: true,
    }),
    [postBook.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      bookss: payload || state.books,
    }),
    [postBook.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
