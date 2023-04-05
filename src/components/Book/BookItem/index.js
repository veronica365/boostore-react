import PropTypes from 'prop-types';
import React from 'react';
import BookRemove from '../BookRemoveButton';

export default function Book({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <BookRemove id={book.itemId} />
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
