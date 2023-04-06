import {
  Route, BrowserRouter, Routes, Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/Book/BookList';
import Category from './components/Categories/Category';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Category />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
