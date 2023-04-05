import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/booksSlice';

export default function Book({ book }) {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(book.item_id));
  };
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="button" onClick={handleRemoveBook}>
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
