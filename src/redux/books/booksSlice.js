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

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
      books: payload,
    }),
    [getBooks.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
