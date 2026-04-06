import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/arc-guide", label: "ARC Guide" },
  { to: "/housing", label: "Housing" },
  { to: "/dorm-rules", label: "Dorm Rules" },
  { to: "/emergency", label: "Emergency" },
  { to: "/jobs", label: "Jobs" },
  { to: "/visa", label: "Visa" },
  { to: "/apps", label: "Apps" },
  { to: "/language", label: "Language" },
  { to: "/help", label: "Help" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="public/logo/kr-buddy.png"
            alt="KR Buddy Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-600 hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="py-3 text-gray-600 hover:text-black border-b border-gray-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;