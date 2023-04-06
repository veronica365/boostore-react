import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from '../BookItem';
import NewBook from '../NewBook';
import { getBooks } from '../../../redux/books/booksSlice';

export default function BookList() {
  const { books, isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading pop">
        <h1>Loading books ...</h1>
      </div>
    );
  }
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.itemId} book={book} />
      ))}
      <NewBook />
    </div>
  );
}
