import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-3 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:underline">Property Listings</Link>
      </h1>
      <nav>
        <Link to="/" className="mx-4 hover:underline">Home</Link>
        <Link to="/cart" className="mx-4 hover:underline">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
