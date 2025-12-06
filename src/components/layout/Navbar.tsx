"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";

const Navbar: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageSwitch = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    let path = pathname;
    if (path.startsWith(`/${locale}`)) {
      path = path.replace(`/${locale}`, "");
    }
    router.push(`/${newLocale}${path}`);
  };

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
    { name: t("home"), href: "#home" },
    { name: t("aboutUs"), href: "#about" },
    { name: t("features"), href: "#features" },
    { name: t("howItWorks"), href: "#how-it-works" },
    { name: t("whyUs"), href: "#why-us" },
  ];
  const isPartnersActive = pathname.startsWith("/partners");

  return (
    <nav
      className={`${locale === "ar" ? "font-cairo" : "font-inter"} fixed top-0 z-50 w-full transition-all duration-300 ${
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
                sizes="(max-width: 768px) 80px, 96px"
                quality={75}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-brand-orange text-brand-blue text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
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
              {t("partners")}
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
              <div className="absolute start-0 top-full z-50 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                <Link
                  href="#"
                  className="text-brand-blue block px-4 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setIsPartnersOpen(false)}
                >
                  {t("drivers")}
                </Link>
                <Link
                  href="#"
                  className="text-brand-blue block px-4 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setIsPartnersOpen(false)}
                >
                  {t("merchants")}
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          {/* Language Switcher - Desktop */}
          <button
            onClick={handleLanguageSwitch}
            className={`text-brand-orange flex items-center gap-2 text-sm font-medium transition-colors ${locale === "en" && "font-cairo"}`}
          >
            <Globe className="h-4 w-4" />
            {locale === "en" ? "العربية" : "English"}
          </button>

          {/* Desktop Contact Button */}
          <Link
            href="#why-us"
            className="bg-brand-orange rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 xl:px-6 xl:py-3"
          >
            {t("contactUs")}
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
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-orange block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
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
                {t("partners")}
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
                <div className="ms-4 space-y-1">
                  <Link
                    href="/partners/drivers"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsPartnersOpen(false);
                    }}
                  >
                    {t("drivers")}
                  </Link>
                  <Link
                    href="/partners/merchants"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsPartnersOpen(false);
                    }}
                  >
                    {t("merchants")}
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Language Switcher */}
            <button
              onClick={() => {
                handleLanguageSwitch();
                setIsMobileMenuOpen(false);
              }}
              className={`text-brand-orange flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-start text-base font-medium hover:bg-gray-50 ${locale === "en" && "font-cairo"}`}
            >
              <Globe className="h-4 w-4" />
              {locale === "en" ? "العربية" : "English"}
            </button>

            {/* Mobile Contact Button */}
            <div className="pt-2">
              <Link
                href="#why-us"
                className="bg-brand-orange block rounded-lg px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-orange-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("contactUs")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
