import React from "react";
import { BrowserRouter, Router, Route, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/caracters">Caracteres</a>
        </li>
      </ul>
    </nav>
  );
};
