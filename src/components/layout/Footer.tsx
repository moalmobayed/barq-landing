"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import GradualBlurMemo from "../GradualBlur";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const quickLinks = [
    { label: t("links.home"), href: "#home" },
    { label: t("links.aboutUs"), href: "#about" },
    { label: t("links.features"), href: "#features" },
    { label: t("links.blog"), href: "#how-it-works" },
    { label: t("links.contactUs"), href: "#why-us" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaPinterestP, href: "https://pinterest.com", label: "Pinterest" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Orange Glow Effects */}
      <div className="bg-brand-orange/60 pointer-events-none absolute start-1/4 -top-40 size-72 -translate-x-1/2 rounded-full blur-[120px]"></div>
      <div className="bg-brand-orange/60 pointer-events-none absolute end-0 bottom-0 size-72 rounded-full blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:py-16 lg:pt-40">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Brand & Contact Column */}
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/logo/barq-logo.png"
                alt="Barq Logo"
                width={80}
                height={32}
                quality={75}
                className="h-24 w-auto"
              />
            </Link>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 h-4 w-4 shrink-0 text-white" />
                <a
                  href="tel:+13866883295"
                  className="text-sm text-gray-100 transition-colors hover:text-white"
                >
                  +1 386-688-3295
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 h-4 w-4 shrink-0 text-white" />
                <a
                  href="mailto:Ourstudio@hello.com"
                  className="text-sm text-gray-100 transition-colors hover:text-white"
                >
                  Ourstudio@hello.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 h-4 w-4 shrink-0 text-white" />
                <p className="text-sm text-gray-100">
                  8819 Ohio St. South Gate,CA 90
                </p>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-brand-orange hover:bg-brand-orange flex h-12 items-center gap-2 rounded-xl px-4 transition-all">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-start">
                    <div className="text-[10px] font-semibold text-white">
                      {t("downloadOn")}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {t("appStore")}
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-brand-orange hover:bg-brand-orange flex h-12 items-center gap-2 rounded-xl px-4 transition-all">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-start">
                    <div className="text-[10px] font-semibold text-white">
                      {t("getItOn")}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {t("googlePlay")}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-6 border-s-[3px] ps-2 text-lg font-bold">
              {t("quickLinksTitle")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-orange text-sm text-gray-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Column */}
          <div>
            <h3 className="mb-6 border-s-[3px] ps-2 text-lg font-bold">
              {t("subscribeTitle")}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              {t("subscribeText")}
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                required
                className="h-12 w-full rounded-xl border border-white/40 bg-transparent px-4 pe-14 text-sm text-white placeholder-white/50 focus:border-orange-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label={t("subscribeButtonAria")}
                className="bg-brand-orange hover:bg-brand-orange absolute end-1.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-lg transition-all"
              >
                <FaPaperPlane className="h-4 w-4 text-white" />
              </button>
            </form>

            <p className="mt-4 text-xs text-gray-400">{t("disclaimer")}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">
            {t("copyright", { year: currentYear })}
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-all hover:border-orange-500 hover:bg-orange-500/10"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4 text-white/50 transition-colors group-hover:text-white" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <GradualBlurMemo
        target="page"
        position="bottom"
        height="3rem"
        strength={2}
        divCount={2}
        curve="bezier"
        exponential={false}
        opacity={1}
      />
    </footer>
  );
};

export default Footer;
