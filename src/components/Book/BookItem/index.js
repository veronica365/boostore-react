import PropTypes from 'prop-types';
import React from 'react';
import BookRemove from '../BookRemoveButton';

export default function Book({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <BookRemove id={book.item_id} />
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
