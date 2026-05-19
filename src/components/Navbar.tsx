import { useState } from "react";
import logo from "../assets/hero/logo.png";
import { LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center text-white">
        {/* Nav Logo */}
        <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-200 lg:rounded-full lg:shadow-lg">
          <img src={logo} alt="Restaura Logo" width={80} height={22} />

          {/* Desktop Links */}
          <ul className="hidden space-x-6 lg:flex">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`cursor-pointer ${index !== 0 && "border-l-2 border-neutral-300/20 pl-2"} hover:opacity-50`}
              >
                {link.text}
              </a>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="cursor-pointer" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="w-full backdrop-blur-lg ld:hidden">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block p-4 uppercase tracking-tighter cursor-pointer"
                onClick={toggleMobileMenu}
              >
                {link.text}
              </a>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
