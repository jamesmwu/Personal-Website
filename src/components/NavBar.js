import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navigation'>
      <h1>James Wu</h1>
      <nav>
        <Link className='navLinks' to='/'>
          Home
        </Link>
        <Link className='navLinks' to='/experience'>
          Experience
        </Link>
        <Link className='navLinks' to='/contact'>
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
