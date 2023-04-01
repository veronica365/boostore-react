import BookItem from '../BookItem';
import NewBook from '../NewBook';

export default function BookList() {
  const books = [
    {
      id: 1,
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: '64%',
    },
    {
      id: 2,
      genre: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      completed: '6%',
    },
    {
      id: 3,
      genre: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completed: '0%',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <NewBook />
    </div>
  );
}
