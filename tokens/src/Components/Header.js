import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

export const Header = () => {
  return (
    <>
      <p className="headertop">Tokens.io</p>

      <ul>
        <li>
          <Link className="nav-link" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="right">
          <Link className="nav-link" aria-current="page" to="/register">
            Register
          </Link>
        </li>
        <li className="right">
          <Link className="nav-link" aria-current="page" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
};
