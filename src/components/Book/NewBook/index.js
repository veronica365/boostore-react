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
      <div className="loading">
        <h1>Adding book...</h1>
      </div>
    );
  }
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
          handleResetForm={() => setState({})}
        />
      </form>
    </div>
  );
}
