import { useState } from 'react';

export default function NewBook() {
  const [state, setState] = useState({});
  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
