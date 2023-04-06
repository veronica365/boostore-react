import PropTypes from 'prop-types';
import React from 'react';
import BookRemove from '../BookRemoveButton';

export default function Book({ book }) {
  const percentage = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 50);
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
      <div className="book-progress">
        <div className="book-progress-circle">
          <div className="book-progress-circle-inner" />
        </div>
        <div className="book-progress-circle-inner-percentage">
          <span>{`${percentage}%`}</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="book-progress-divider" />
      <div className="book-chapter">
        <span className="current-chapter">CURRENT CHAPTER</span>
        <span className="chapter-number">
          Chapter
          {' '}
          {chapter}
        </span>
        <button type="button">UPDATE PROGRESS</button>
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
