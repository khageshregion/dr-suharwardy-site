import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Dr. Suharwardy</div>
        <div className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
