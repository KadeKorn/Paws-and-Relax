import React from "react";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3 lg:p-6">
      <div className="mx-auto flex items-center flex-shrink-0 text-white mr-4">
        <span className="font-semibold text-xl tracking-tight">
          Paws and Relax
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <IoMenu size={24} />
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end">
        <div className="text-sm lg:flex-grow">
          <a
            href="#testimonials"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-6"
          >
            Testimonials
          </a>
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-6"
          >
            About Us
          </a>
          <a
            href="#pricing"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mr-6"
          >
            Pricing
          </a>
          <a
            href="#calendar"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
