import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">

        {/* Navbar Main */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-white hover:text-indigo-400 transition duration-300"
          >
            Prerana<span className="text-indigo-500">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-slate-300 hover:text-indigo-400 transition duration-300 font-medium group"
              >
                {item.name}

                {/* Hover Line */}
                <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 text-2xl hover:text-indigo-400 transition duration-300 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-5 border-t border-slate-800">

            <div className="flex flex-col gap-1 pt-4">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-indigo-400 hover:bg-slate-900/60 rounded-lg transition duration-300 font-medium py-3 px-4"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;