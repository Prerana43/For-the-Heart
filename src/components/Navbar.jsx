import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-soft shadow-md">
        
            {/* <img src={logo} alt="For The Heart" className="w-16 mb-6 rounded-full" /> */}
            <h1 className="font-heading text-2xl text-brand">For The Heart</h1>
        
      
      <div className="flex gap-6 text-dark">
        <Link to="/" className="hover:text-brand">Home</Link>
        <Link to="/about" className="hover:text-brand">About</Link>
        <Link to="/blog" className="hover:text-brand">Blog</Link>
        <Link to="/gallery" className="hover:text-brand">Gallery</Link>
        <Link to="/contact" className="hover:text-brand">Contact</Link>
      </div>
    </nav>
  );
}
