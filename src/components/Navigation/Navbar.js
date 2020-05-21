import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <Link to='/cats'>Cats</Link>
        </li>
        <li>
          <Link to='/dogs'>Dogs</Link>
        </li>
        <li>
          <Link to='/computers'>Computers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
