import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blush shadow-md">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
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

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-dark">
          <Link to="/" className="hover:text-brand">Home</Link>
          <Link to="/about" className="hover:text-brand">About</Link>
          <Link to="/gallery" className="hover:text-brand">Gallery</Link>
          <Link to="/blog" className="hover:text-brand">Blog</Link>
          <Link to="/contact" className="hover:text-brand">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brand text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-blush px-6 pb-4 gap-4 text-dark">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/gallery">Gallery</Link>
          <Link onClick={() => setOpen(false)} to="/blog">Blog</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
