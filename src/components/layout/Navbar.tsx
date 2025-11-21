"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "How it work", href: "/how-it-work" },
    { name: "Why Us", href: "/why-us" },
  ];

  const isActive = (href: string) => pathname === href;
  const isPartnersActive = pathname.startsWith("/partners");

  return (
    <nav
      className={`font-inter fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-md" : "backdrop-blur-xs"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 md:px-6 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div
              className={`relative transition-all duration-300 ${
                isScrolled
                  ? "h-8 w-16 md:h-10 md:w-20"
                  : "h-10 w-20 md:h-12 md:w-24"
              }`}
            >
              <Image
                src="/images/logo/barq-logo.png"
                alt="Barq Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-brand-orange text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-brand-orange font-semibold"
                  : "text-brand-blue"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Partners Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsPartnersOpen(!isPartnersOpen)}
              className={`hover:text-brand-orange flex items-center gap-1 text-sm font-medium transition-colors ${
                isPartnersActive
                  ? "text-brand-orange font-semibold"
                  : "text-brand-blue"
              }`}
            >
              Partners
              <svg
                className={`h-4 w-4 transition-transform ${isPartnersOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isPartnersOpen && (
              <div className="absolute top-full left-0 z-50 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                <Link
                  href="/partners/drivers"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsPartnersOpen(false)}
                >
                  Drivers
                </Link>
                <Link
                  href="/partners/merchants"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsPartnersOpen(false)}
                >
                  Merchants
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-brand-orange rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 xl:px-6 xl:py-3"
          >
            Contact US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 pt-2 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-brand-orange block rounded-lg px-3 py-2 text-base font-medium hover:bg-gray-50 ${
                  isActive(link.href)
                    ? "text-brand-orange bg-orange-50 font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Partners Section */}
            <div>
              <button
                onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                className={`hover:text-brand-orange flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium hover:bg-gray-50 ${
                  isPartnersActive
                    ? "text-brand-orange bg-orange-50 font-semibold"
                    : "text-gray-700"
                }`}
              >
                Partners
                <svg
                  className={`h-4 w-4 transition-transform ${isPartnersOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isPartnersOpen && (
                <div className="ml-4 space-y-1">
                  <Link
                    href="/partners/drivers"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsPartnersOpen(false);
                    }}
                  >
                    Drivers
                  </Link>
                  <Link
                    href="/partners/merchants"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsPartnersOpen(false);
                    }}
                  >
                    Merchants
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Contact Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="bg-brand-orange block rounded-lg px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-orange-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact US
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
