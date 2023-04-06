import PropTypes from 'prop-types';
import React from 'react';
import BookRemove from '../BookRemoveButton';

export default function Book({ book }) {
  return (
    <div className="book-item">
      <div className="book-info">
        <span className="book-category">{book.category}</span>
        <h3 className="book-title">{book.title}</h3>
        <p>{book.author}</p>
        <div className="book-actions">
          <button type="button">Comments</button>
          <div className="divider" />
          <BookRemove id={book.itemId} />
          <div className="divider" />
          <button type="button">Edit</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
