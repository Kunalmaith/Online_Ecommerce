import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Import your icons
import SearchIcon from '../../assets/images/search.svg?react';
import CartIcon from '../../assets/images/Allicons/Cart=Off.svg?react';
import HeartIcon from '../../assets/images/Allicons/Vector-8.svg?react';
import UserIcon from '../../assets/images/Account-dropdown/user.svg?react';
import LogoutIcon from '../../assets/images/Account-dropdown/Icon-logout.svg?react';
import BurgerBtn from './BurgerBtn';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    handleLinkClick();
    navigate('/');
  };

  return (
    // The header is the positioning context (relative)
    <header className='relative z-50 font-poppins border-b bg-white'>
      <div className='container mx-auto flex h-20 items-center justify-between px-4 md:px-6'>
        
        {/* 1. Logo */}
        <div className='text-2xl font-bold'>
          <NavLink to='/' onClick={handleLinkClick}>Exclusive</NavLink>
        </div>

        {/* 2. Desktop Navigation */}
        <nav className='hidden lg:flex items-center gap-12 font-medium'>
          <NavLink to='/' className={({isActive}) => isActive ? "underline" : ""}>Home</NavLink>
          {/* <NavLink to='/contact_us' className={({isActive}) => isActive ? "underline" : ""}>Contact</NavLink> */}
          {isLoggedIn && (<NavLink to='/contact_us' className={({isActive})=> isActive ? "underline" : ""}>Contact</NavLink>)}
          <NavLink to='/about_us' className={({isActive}) => isActive ? "underline" : ""}>About</NavLink>
          {!isLoggedIn && (
            <NavLink to='/sign_up' className={({isActive}) => isActive ? "underline" : ""}>Sign Up</NavLink>
          )}
        </nav>

        {/* 3. Desktop Search and Actions */}
        <div className='hidden lg:flex items-center gap-6'>
          <div className='flex items-center bg-gray-100 px-4 py-2 rounded-md'>
            <input type="text" placeholder='What are you looking for?' className='bg-transparent text-sm outline-none w-full' />
            <SearchIcon className="size-5 text-gray-600" />
          </div>
          <NavLink to="/wishlist" aria-label="Wishlist"><HeartIcon className='size-6 hover:scale-110 transition-transform' /></NavLink>
          <NavLink to="/cart" aria-label="Cart"><CartIcon className='size-6 hover:scale-110 transition-transform' /></NavLink>
          
          {isLoggedIn && (
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} aria-label="Account options">
                <UserIcon className='bg-[#DB4444] text-white rounded-full p-1 size-8 hover:scale-110 transition-transform' />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <NavLink to="/account" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</NavLink>
                  <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 4. Mobile Burger Button & Cart */}
        <div className='lg:hidden flex items-center gap-4'>
          <NavLink to="/cart" aria-label="Cart"><CartIcon className='size-7' /></NavLink>
          <BurgerBtn setIsOpen={setIsMobileMenuOpen} isOpen={isMobileMenuOpen} />
        </div>
      </div>

      {/* ✅ CORRECTED PLACEMENT:
        The mobile menu is now INSIDE the header.
        `absolute` and `top-full` will now work correctly relative to the header.
      */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-lg lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-[120%]'}`}>
        <div className='container mx-auto flex flex-col gap-6 p-6'>
          {/* Links */}
          <NavLink to='/' onClick={handleLinkClick}>Home</NavLink>
          <NavLink to='/contact_us' onClick={handleLinkClick}>Contact</NavLink>
          <NavLink to='/about_us' onClick={handleLinkClick}>About</NavLink>
          <hr/>
          
          {/* Conditional Mobile Actions */}
          {isLoggedIn ? (
            <>
              <NavLink to="/account" onClick={handleLinkClick} className="flex items-center gap-2">
                <UserIcon className='bg-[#DB4444] text-white rounded-full p-1 size-7' /> My Account
              </NavLink>
              <NavLink to="/wishlist" onClick={handleLinkClick} className="flex items-center gap-2">
                <HeartIcon className='size-5' /> Wishlist
              </NavLink>
              <button onClick={handleLogout} className="flex items-center gap-2 text-red-500">
                <LogoutIcon className='size-5' /> Logout
              </button>
            </>
          ) : (
            <NavLink to='/sign_up' onClick={handleLinkClick} className="font-bold text-blue-600">Sign Up / Login</NavLink>
          )}

          {/* Search Bar */}
          <div className='flex items-center bg-gray-100 px-4 py-2 mt-2 rounded-md'>
            <input type="text" placeholder='Search...' className='bg-transparent text-sm outline-none w-full' />
            <SearchIcon className="size-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header> // <-- Menu is now inside the header
    // The empty fragment `<>` is no longer needed unless you have other sibling elements outside the header.
  );
}

export default Navbar;