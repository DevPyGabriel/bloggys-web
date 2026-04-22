import Icons from "../Icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 fixed top-0 z-50 xl:px-0 md:px-8 px-4">
      <div className="w-full max-w-7xl mx-auto flex items-center h-full justify-between relative">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold cursor-pointer"
        >
          <div className="text-blue-500">
            <Icons.Logo size={32} />
          </div>
          <span>Bloggys</span>
        </Link>
        <div className="">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden block">
            <Icons.Menu size={32} />
          </div>
          <div className="hidden sm:flex items-center space-x-6 font-medium">
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Inicio
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div 
          className={`absolute top-18 right-0 ${isMenuOpen ? 'scale-100 opacity-100 visible' : 'scale-0 opacity-0 invisible'} transition-all duration-200 origin-top-right overflow-clip`}
        >
          <div className="bg-white flex flex-col items-end divide-y divide-gray-200 rounded-lg overflow-clip shadow-xl">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/"
              className="hover:text-blue-500 hover:bg-gray-100 transition-colors duration-200 w-full text-center px-6 py-3"
            >
              Inicio
            </Link>

            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/"
              className="hover:text-blue-500 hover:bg-gray-100 transition-colors duration-200 w-full text-center px-6 py-3"
            >
              Blogs
            </Link>

            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/"
              className="hover:text-blue-500 hover:bg-gray-100 transition-colors duration-200 w-full text-center px-6 py-3"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
