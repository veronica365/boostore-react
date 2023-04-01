import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="nav container-width">
        <div>
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
      </nav>
    </div>
  );
}
