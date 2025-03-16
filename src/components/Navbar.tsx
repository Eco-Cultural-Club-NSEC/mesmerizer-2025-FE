import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 text-white bg-transparent border-white/20 transition-all duration-300 ${
        scrolled ? "border-b backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl">
              MESMERIZER'25
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-xl">
            <Link to="/events" className="hover:text-rgb(var(--color-primary))">
              Events
            </Link>
            <Link
              to="/gallery"
              className="hover:text-rgb(var(--color-primary))"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="hover:text-rgb(var(--color-primary))"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-0 bg-transparent text-white "
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full z-40 bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-2 py-4 rounded-md text-3xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Mesmerizer'25
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
