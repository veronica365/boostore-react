import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../../redux/books/booksSlice';

export default function BookRemove({ id }) {
  const { isRemoving } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  if (isRemoving === id) {
    return (
      <div className="loading">
        <span>Removing book ...</span>
      </div>
    );
  }
  return (
    <button type="button" onClick={handleRemove}>
      Remove
    </button>
  );
}
BookRemove.propTypes = {
  id: PropTypes.string.isRequired,
};
