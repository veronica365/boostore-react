import { useSelector } from 'react-redux';
import BookItem from '../BookItem';
import NewBook from '../NewBook';

export default function BookList() {
  const books = useSelector((store) => store.books.books);
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
      <NewBook />
    </div>
  );
}
