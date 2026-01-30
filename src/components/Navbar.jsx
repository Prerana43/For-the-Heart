import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-blush shadow-md">
        
            {/* <img src={logo} alt="For The Heart" className="w-16 mb-6 rounded-full" /> */}
            <div className="flex items-center gap-2">
  <img
    src={logo}
    alt="For the Heart Logo"
    className="w-8 h-8 object-contain"
  />
  <h1 className="text-xl text-brand font-bold">
    For the Heart
  </h1>
</div>

        
      
      <div className="flex gap-6 text-dark">
        <Link to="/" className="hover:text-brand">Home</Link>
        <Link to="/about" className="hover:text-brand">About</Link> 
        <Link to="/gallery" className="hover:text-brand">Gallery</Link>
        <Link to="/blog" className="hover:text-brand">Blog</Link>
        <Link to="/contact" className="hover:text-brand">Contact</Link>
      </div>
    </nav>
  );
}
