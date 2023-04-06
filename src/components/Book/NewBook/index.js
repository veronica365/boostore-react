import { useState } from 'react';
import { useSelector } from 'react-redux';
import BookAddButton from '../BookAddButton';

export default function NewBook() {
  const [state, setState] = useState({});
  const { isCreating } = useSelector((store) => store.books);
  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value.trim() }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  if (isCreating) {
    return (
      <div className="loading pop">
        <h1>Adding book...</h1>
      </div>
    );
  }
  return (
    <div className="new-book">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Book title"
          autoComplete="off"
          defaultValue={state.title}
        />
        <input
          type="text"
          name="author"
          onChange={handleChange}
          placeholder="Author"
          autoComplete="off"
          defaultValue={state.author}
        />
        <BookAddButton
          title={state.title}
          author={state.author}
          category="Religion"
          handleResetForm={() => setState({})}
        />
      </form>
    </div>
  );
}
