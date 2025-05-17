import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-800">
              Bright Minds Academy
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? (
                <X className="cursor-pointer h-6 w-6" />
              ) : (
                <Menu className="cursor-pointer h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} pt-4 pb-2`}>
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="cursor-pointer text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="cursor-pointer text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="cursor-pointer text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 self-center"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
