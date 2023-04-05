import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/booksSlice';

export default function BookAddButton({
  lastBookId, title, author, category,
}) {
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    if (!title?.trim() || !author?.trim()) return;
    dispatch(
      addBook({
        title,
        author,
        category,
        item_id: lastBookId,
      }),
    );
    e.target.parent.elements.title.value = '';
    e.target.parent.elements.author.value = '';
  };
  return (
    <button type="button" onClick={handleAdd}>
      Add
    </button>
  );
}
BookAddButton.propTypes = {
  lastBookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
