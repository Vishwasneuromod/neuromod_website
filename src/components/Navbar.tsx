import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const services = [
  { to: "/services/1", label: "Service 1" },
  { to: "/services/2", label: "Service 2" },
  { to: "/services/3", label: "Service 3" },
  { to: "/services/4", label: "Service 4" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-teal-600 ${
      pathname === path ? "text-teal-600" : "text-gray-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="text-2xl font-extrabold tracking-widest text-teal-700">
            NEUROMOD
          </span>
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Dr. Vishwas
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkClass("/")}>Home</Link>

          {/* Services dropdown — extended hit area prevents gap-triggered close */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-1 pb-2">
              Services
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              /* -mt-2 pulls the menu up to cover the pb-2 gap so mouse never leaves the hover zone */
              <div className="absolute top-full left-0 -mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-100 py-1 pt-3">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className={linkClass("/about")}>About</Link>

          <a
            href="#contact"
            className="bg-teal-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-teal-700 transition-colors"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <Link to="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>Home</Link>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Services</p>
          {services.map((s) => (
            <Link key={s.to} to={s.to} className="pl-3 text-sm text-gray-700 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
              {s.label}
            </Link>
          ))}
          <Link to="/about" className={linkClass("/about")} onClick={() => setMenuOpen(false)}>About</Link>
          <a
            href="#contact"
            className="bg-teal-600 text-white text-sm font-semibold px-5 py-2 rounded-full text-center hover:bg-teal-700"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
