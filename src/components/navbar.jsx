import React from 'react';

// Stateless Functional Component
const NavBar = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge rounded-pill bg-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
