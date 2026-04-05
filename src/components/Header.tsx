import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/arc-guide", label: "ARC Guide" },
  { to: "/dormitory-rules", label: "Dorm Rules" },
  { to: "/emergency", label: "Emergency" },
  { to: "/campus-life", label: "Campus Life" },
  { to: "/tips", label: "Tips" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-foreground">
          Campus Helper Korea
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-card">
          <div className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-3 text-muted-foreground hover:text-foreground border-b border-border last:border-0"
                onClick={() => setIsOpen(false)}
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
