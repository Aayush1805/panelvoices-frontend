"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navigationItems = [
    { text: "Creative Platform", hasDropdown: true },
    { text: "Agents Platform", hasDropdown: true },
    { text: "Developers", hasDropdown: true },
    { text: "Resources", hasDropdown: true },
    { text: "Enterprise", hasDropdown: false },
    { text: "Pricing", hasDropdown: false },
  ];

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-3 md:py-4 bg-white relative z-40">
        {/* Left Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/elevenlabs-logo-black.png"
            width={100}
            height={30}
            alt="ElevenLabs"
            className="w-22 sm:w-28 md:w-30 lg:w-34 h-auto"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-medium text-gray-800">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 cursor-pointer hover:text-black transition-colors duration-200 whitespace-nowrap"
            >
              <span>{item.text}</span>
              {item.hasDropdown && <MdKeyboardArrowDown size={18} />}
            </div>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
          <button className="text-sm font-medium text-gray-800 hover:text-black transition-colors duration-200 whitespace-nowrap">
            Log in
          </button>
          <button className="px-4 xl:px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-colors duration-200 whitespace-nowrap">
            Sign up
          </button>
        </div>


        <div className="hidden md:flex lg:hidden items-center space-x-2">
          <button className="text-xs font-medium text-gray-800 hover:text-black transition-colors duration-200">
            Log in
          </button>
          <button className="px-3 py-1.5 bg-black text-white rounded-full text-xs font-medium hover:bg-gray-900 transition-colors duration-200">
            Sign up
          </button>
          <button
            className="ml-2 text-2xl text-gray-800 hover:text-black transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800 hover:text-black transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </header>

      {/* Mobile/Tablet Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile/Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-[60px] sm:top-[64px] md:top-[72px] left-0 right-0 bg-white shadow-lg z-40 lg:hidden max-h-[calc(100vh-60px)] sm:max-h-[calc(100vh-64px)] md:max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="flex flex-col px-4 sm:px-6 py-4 space-y-4">
            {/* Navigation Items */}
            <div className="space-y-4">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between cursor-pointer hover:text-black transition-colors duration-200 py-2"
                >
                  <span className="text-base font-medium text-gray-800">
                    {item.text}
                  </span>
                  {item.hasDropdown && (
                    <MdKeyboardArrowDown size={20} className="text-gray-600" />
                  )}
                </div>
              ))}
            </div>


            <hr className="border-gray-200 my-4" />

            {/* Auth Buttons */}
            <div className="space-y-3 pb-4">
              <button className="w-full text-left py-3 text-base font-medium text-gray-800 hover:text-black transition-colors duration-200">
                Log in
              </button>
              <button className="w-full px-4 py-3 bg-black text-white rounded-full text-base font-medium hover:bg-gray-900 transition-colors duration-200">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;