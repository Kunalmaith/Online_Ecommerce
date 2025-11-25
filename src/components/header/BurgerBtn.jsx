import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function BurgerBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Burger button to open the menu */}
      <button onClick={toggleMenu} className="focus:outline-none lg:hidden">
        <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-gray-700" />
      </button>

      {/* Mobile Menu Sidebar */}
      <div
        className={`
          fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 lg:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-4">
          {/* Close button */}
          <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-lg font-medium">
          <NavLink to="/" onClick={toggleMenu} className="hover:text-red-500">Home</NavLink>
          <NavLink to="/contact_us" onClick={toggleMenu} className="hover:text-red-500">Contact</NavLink>
          <NavLink to="/about_us" onClick={toggleMenu} className="hover:text-red-500">About</NavLink>
          <NavLink to="/sign_up" onClick={toggleMenu} className="hover:text-red-500">Sign Up</NavLink>
        </nav>
      </div>
    </>
  );
}

export default BurgerBtn;