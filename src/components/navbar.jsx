import React from 'react';

// Stateless Functional Component
const NavBar = ({totalCounters}) => {
  console.log('Navbar - Rendered');
  return (
    <nav className="navbar bg-body-tertiary">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge rounded-pill bg-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
