import React, { useState } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import ContactForm from "../ContactForm/ContactForm";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full lg:mt-3  lg:rounded-2xl lg:w-[95%] shadow-xl fixed bg-white top-0 left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 px-4 lg:px-10 py-4 lg:py-5 flex items-center justify-between z-50 rounded-b-2xl">
        {/* Mobile Logo - Left side */}
        <h1 className="text-2xl font-light lg:hidden">HH</h1>

        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex gap-6 lg:gap-10">
          <a href="#" className="hover:text-gray-600 transition-colors">
            Markets
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Product
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Resources
          </a>
        </div>

        {/* Desktop Logo - Center */}
        <h1 className="hidden lg:block text-2xl font-light">HH</h1>

        {/* Desktop Action Buttons - Hidden on mobile */}
        <div className="hidden lg:flex gap-2">
          <button className="text-sm px-4 py-2 border-1 rounded-xl flex items-center gap-1 hover:cursor-pointer hover:bg-gray-50 transition-colors">
            Advertising <MdKeyboardArrowDown />
          </button>
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="text-white bg-black px-4 py-2 border-1 rounded-xl hover:cursor-pointer hover:animate-bounce"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Hamburger Menu - Right side */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-light">HH</h1>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <MdClose size={24} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-4 mb-8">
            <a
              href="#"
              className="block py-3 text-lg hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Markets
            </a>
            <a
              href="#"
              className="block py-3 text-lg hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Product
            </a>
            <a
              href="#"
              className="block py-3 text-lg hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#"
              className="block py-3 text-lg hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Resources
            </a>
          </div>

          {/* Mobile Action Buttons */}
          <div className="space-y-4">
            <button className="w-full text-sm px-4 py-3 border-1 rounded-xl flex items-center justify-center gap-1 hover:bg-gray-50 transition-colors">
              Advertising <MdKeyboardArrowDown />
            </button>
            <button
              onClick={() => {
                setIsContactFormOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full text-white bg-black px-4 py-3 border-1 rounded-xl hover:cursor-pointer hover:animate-bounce"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </>
  );
}
