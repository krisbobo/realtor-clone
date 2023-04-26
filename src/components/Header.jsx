import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-3 mx-auto max-w-6xl sticky top-0 z-50 bg-white border-b shadow-sm">
        <img className="h-8 cursor-pointer" src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Logo" />
        <nav>
          <ul className="flex space-x-10 opacity-50 ">
            <li>
              <NavLink className="opacity-100 font-semibold text-sm py-3 border-b-[3px]" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/offers">Offers</NavLink>
            </li>
            <li>
              <NavLink to="/sign-in">Sign In</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
