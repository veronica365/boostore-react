import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/booksSlice';

export default function NewBook() {
  const [state, setState] = useState({});
  const dispatch = useDispatch();
  let lastBookId = useSelector((store) => store.books.books);
  lastBookId = lastBookId[lastBookId.length - 1]?.item_id || 'item0';
  lastBookId = lastBookId.replace('item', '');
  lastBookId = lastBookId && parseInt(lastBookId, 10);
  lastBookId = `item${lastBookId + 1}`;
  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value.trim() }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!state.title?.trim() || !state.author?.trim()) return;
    const newBook = { ...state, category: 'Fiction', item_id: lastBookId };
    dispatch(addBook(newBook));
    e.target.elements.title.value = '';
    e.target.elements.author.value = '';
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Book title"
          defaultValue={state.title}
        />
        <input
          type="text"
          name="author"
          onChange={handleChange}
          placeholder="Author"
          defaultValue={state.author}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
