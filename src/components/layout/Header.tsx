import Icons from "../Icons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 fixed top-0 z-50 xl:px-0 md:px-8 px-4">
      <div className="w-full max-w-7xl mx-auto flex items-center h-full justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold cursor-pointer">
          <div className="text-blue-500"><Icons.Logo size={32} /></div>
          <span>Bloggy</span>
        </Link>
        <div className="flex items-center space-x-6 font-medium">
          <div className="hover:text-blue-500 transition-colors duration-200">
            <Link to="/">Inicio</Link>
          </div>
          <div className="hover:text-blue-500 transition-colors duration-200">
            <Link to="/about">Blogs</Link>
          </div>
          <div className="hover:text-blue-500 transition-colors duration-200">
            <Link to="/contact">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
