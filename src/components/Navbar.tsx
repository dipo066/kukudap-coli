
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-purple-800">DesainPro</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-700">Beranda</Link>
            <Link to="/courses" className="text-gray-700 hover:text-purple-700">Kursus</Link>
            <Link to="/mentors" className="text-gray-700 hover:text-purple-700">Mentor</Link>
            <Link to="/resources" className="text-gray-700 hover:text-purple-700">Sumber Belajar</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">Masuk</Button>
            <Button className="bg-purple-700 hover:bg-purple-800">Daftar</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-purple-700 py-2">Beranda</Link>
              <Link to="/courses" className="text-gray-700 hover:text-purple-700 py-2">Kursus</Link>
              <Link to="/mentors" className="text-gray-700 hover:text-purple-700 py-2">Mentor</Link>
              <Link to="/resources" className="text-gray-700 hover:text-purple-700 py-2">Sumber Belajar</Link>
              
              <div className="flex space-x-4 pt-3">
                <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">Masuk</Button>
                <Button className="bg-purple-700 hover:bg-purple-800">Daftar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
