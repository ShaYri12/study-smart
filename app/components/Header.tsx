"use client";

import { useState } from "react";
import Link from "next/link";
import { IoGlobeOutline } from "react-icons/io5";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "./Logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Training", href: "/training" },
  { name: "Consulting", href: "/consulting" },
  { name: "Study Groups", href: "/study-groups" },
  { name: "Coaching", href: "/coaching" },
  { name: "Professional Services", href: "/services" },
  { name: "Mag", href: "/mag" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex justify-between py-2">
          <Logo />
          <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
            <span>EN</span>
            <IoGlobeOutline className="w-4 h-4" />
          </button>
        </div>

        {/* Main header */}
        <div className="relative flex items-center justify-between py-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <RiCloseLine className="w-6 h-6" />
            ) : (
              <RiMenu3Line className="w-6 h-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base text-gray-700 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
