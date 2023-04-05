import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from '../BookItem';
import NewBook from '../NewBook';
import { getBooks } from '../../../redux/books/booksSlice';

export default function BookList() {
  const books = useSelector((store) => store.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
      <NewBook />
    </div>
  );
}
