import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white z-10 py-4 px-8 flex justify-between items-center backdrop-blur-md">
    <h1 className="text-xl font-bold">My Dark Website</h1>
    <div>
      <Link className="mx-4 hover:text-gray-400 transition" to="/">Home</Link>
      <Link className="mx-4 hover:text-gray-400 transition" to="/about">About</Link>
      <Link className="mx-4 hover:text-gray-400 transition" to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
