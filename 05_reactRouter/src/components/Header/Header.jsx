import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `block py-3 px-1 text-[15px] font-medium tracking-tight transition-colors duration-200 rounded-lg lg:py-0 lg:px-0 lg:rounded-none ${
    isActive ? "text-[#018673] font-semibold" : "text-[#018673]"
  } border-b border-gray-100 hover:bg-[#e6f7f3] lg:hover:bg-transparent lg:border-0 hover:text-[#016a5c]`;

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex min-w-0 flex-shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#018673]/20 focus:ring-offset-2"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <Link to="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#018673]/20 focus:ring-offset-2 rounded-lg">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="h-9 w-auto sm:h-10"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop nav – center */}
          <div
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } absolute left-0 right-0 top-16 z-40 border-t border-gray-100 bg-white py-4 shadow-lg lg:static lg:top-0 lg:flex lg:flex-1 lg:justify-center lg:border-0 lg:py-0 lg:shadow-none`}
          >
            <ul className="header-nav-links flex flex-col gap-0 font-medium lg:flex-row lg:items-center lg:gap-8">
              <li>
                <NavLink to="/" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CTA buttons – right */}
          <div className="header-cta flex flex-shrink-0 items-center gap-2 sm:gap-3">
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-lg border border-[#018673] bg-[#018673] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#016a5c] hover:border-[#016a5c] hover:shadow focus:outline-none focus:ring-2 focus:ring-[#018673]/30 focus:ring-offset-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-lg bg-[#018673] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#016a5c] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#018673]/30 focus:ring-offset-2"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
