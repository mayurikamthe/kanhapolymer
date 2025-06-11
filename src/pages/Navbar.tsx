import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavItems from "../components/NavItems";
import NavIcons from "../components/NavIcons";

const Navbar: React.FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">
              <Link to="/">Kanha Polymers</Link>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <NavItems isClick={true} />
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex">
            <NavIcons />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleClick}
              className="text-gray-800 focus:outline-none"
            >
              {isClick ? <IoClose size={25} /> : <GrMenu size={25} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isClick && (
        <div className="md:hidden">
          <NavItems isClick={true} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
