import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postBook } from '../../../redux/books/booksSlice';

export default function BookAddButton({
  title,
  author,
  category,
  handleResetForm,
}) {
  const dispatch = useDispatch();
  let lastBookId = useSelector((store) => store.books.books);
  const handleAdd = (e) => {
    if (!title?.trim() || !author?.trim()) return;
    lastBookId = lastBookId[lastBookId.length - 1]?.item_id || 'item0';
    lastBookId = lastBookId.replace('item', '');
    lastBookId = lastBookId && parseInt(lastBookId, 10);
    lastBookId = `item${lastBookId + 1}`;
    dispatch(
      postBook({
        title,
        author,
        category,
        item_id: lastBookId,
      }),
    );
    e.target.parentElement.elements.title.value = '';
    e.target.parentElement.elements.author.value = '';
    handleResetForm();
  };
  return (
    <button type="button" onClick={handleAdd}>
      Add
    </button>
  );
}
BookAddButton.defaultProps = {
  title: '',
  author: '',
};
BookAddButton.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string.isRequired,
  handleResetForm: PropTypes.func.isRequired,
};
