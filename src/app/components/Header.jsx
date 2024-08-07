'use client';

import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/contact', label: 'Contact' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/projects', label: 'Projects' },
    { href: '/booking', label: 'Booking' },
  ];

  return (
    <header className="bg-white dark:bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl text-gray-800 dark:text-white">
          <Link href="/home">Home</Link>
        </h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center">
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <button
            className="ml-4 text-gray-800 dark:text-white md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 px-4 text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}