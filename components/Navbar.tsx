import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User as UserIcon, LogOut, Sun, Moon, Search, Tag } from 'lucide-react';
import { User, UserRole } from '../types';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  if (user?.role === 'admin') {
    navLinks.push({ name: 'Dashboard', path: '/admin' });
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
           <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link to="/" className="flex flex-col leading-none group">
              <span className="font-sans text-3xl font-extrabold tracking-tighter text-brand-green group-hover:opacity-90 transition-opacity">
                VOLTAZ<sup className="text-xs text-black dark:text-white font-normal align-top">®</sup>
              </span>
              <span className="font-sans text-[0.6rem] font-bold tracking-widest text-brand-blue uppercase">
                Electronics & LED Planet
              </span>
            </Link>
          </div>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 uppercase ${
                    isActive(link.path)
                      ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
               {/* Special Offer Link */}
               <Link
                  to="/offers"
                  className="flex items-center gap-1 text-sm font-bold tracking-wide transition-colors duration-200 uppercase text-red-600 hover:text-red-700 animate-pulse"
                >
                  <Tag size={14} /> Offers
                </Link>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center justify-end gap-4 md:gap-6">
            <button className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
              <Search size={20} />
            </button>
            
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity focus:outline-none"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link to="/cart" className="relative text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
               <ShoppingCart size={20} />
               <span className="absolute -top-1 -right-1 bg-brand-green text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:opacity-70">
                   <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center uppercase">
                      {user.name.charAt(0)}
                   </div>
                </button>
                {/* Dropdown for logout */}
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded shadow-xl border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                   <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                     <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user.name}</p>
                   </div>
                   <button 
                     onClick={onLogout}
                     className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                   >
                     Sign out
                   </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block text-sm font-medium text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 absolute w-full z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-none text-base font-medium border-l-2 ${
                  isActive(link.path)
                    ? 'border-brand-green text-black dark:text-white bg-gray-50 dark:bg-gray-900'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/offers"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-none text-base font-bold border-l-2 border-transparent text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                Exclusive Offers
              </Link>

            {/* Mobile Extra Links */}
            <div className="pt-2 pb-2 border-t border-gray-100 dark:border-gray-800">
               <Link to="/events" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white">Events</Link>
               <Link to="/careers" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-gray-500 hover:text-black dark:hover:text-white">Careers</Link>
            </div>

            {!user && (
               <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                 <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full py-3 text-center text-black dark:text-white border border-gray-200 dark:border-gray-800 font-medium">Login</Link>
                 <Link to="/register" onClick={() => setIsOpen(false)} className="block w-full py-3 text-center text-white bg-black dark:bg-white dark:text-black font-medium">Register</Link>
               </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;