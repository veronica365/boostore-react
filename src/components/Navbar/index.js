import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <h1>Bookstore CMS</h1>
      </div>
      <ul className="links">
        <li>
          <NavLink to="/">Books</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
      <button className="icon-button" type="button">
        <span className="material-icons">person</span>
      </button>
    </nav>
  );
}
