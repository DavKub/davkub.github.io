import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light'
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <a className='navbar-brand' href='#!'>
        Navbar
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarNavAltMarkup'
      >
        <div className='navbar-nav mr-0'>
          <Link to='/' className='nav-item nav-link'>
            Home
          </Link>
          <Link to='/sample' className='nav-item nav-link'>
            Sample
          </Link>
          <a className='nav-item nav-link' href='#!'>
            Pricing
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
