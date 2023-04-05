import { useState } from 'react';
import { useSelector } from 'react-redux';
import BookAddButton from '../BookAddButton';

export default function NewBook() {
  const [state, setState] = useState({});
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
        <BookAddButton
          title={state.title}
          author={state.author}
          category="Fiction"
          lastBookId={lastBookId}
        />
      </form>
    </div>
  );
}
