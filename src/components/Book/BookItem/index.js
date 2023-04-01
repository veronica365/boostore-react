import PropTypes from 'prop-types';
import React from 'react';

export default function Book({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
