import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-16 mx-auto sticky top-0 z-50 bg-white border-b shadow-sm">
        <NavLink to="/">
          <img className="h-8 cursor-pointer" src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Logo" />
        </NavLink>
        <nav>
          <ul className="flex space-x-10 opacity-50">
            <li className="py-4 opacity-100 border-b-[3px] border-b-transparent">
              <NavLink className="font-semibold py-4 text-sm text-gray-400" to="/">Home</NavLink>
            </li>
            <li className="py-4 opacity-100 border-b-[3px] border-b-transparent">
              <NavLink className="font-semibold py-4 text-sm text-gray-400" to="/offers">Offers</NavLink>
            </li>
            <li className="py-4 opacity-100 border-b-[3px] border-b-transparent">
              <NavLink className="font-semibold py-4 text-sm text-gray-400" to="/sign-in">Sign In</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
