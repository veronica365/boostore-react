import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/booksSlice';

export default function BookRemove({ id }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <button type="button" onClick={handleRemove}>
      Remove
    </button>
  );
}
BookRemove.propTypes = {
  id: PropTypes.string.isRequired,
};
