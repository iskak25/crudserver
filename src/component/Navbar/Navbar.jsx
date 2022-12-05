import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="list">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/add">Add Book</Link>
        </li>
        <li>
          <Link to="/all">Book</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
