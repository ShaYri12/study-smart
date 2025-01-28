"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "next-i18next";

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "home", href: "/" },
  { name: "training", href: "/training" },
  { name: "consulting", href: "/consulting" },
  { name: "studyGroups", href: "/study-groups" },
  { name: "coaching", href: "/coaching" },
  { name: "professionalServices", href: "/services" },
  { name: "mag", href: "/mag" },
  { name: "about", href: "/about" },
  { name: "contactUs", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        !(event.target as HTMLElement).closest("#mobile-menu")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between py-2 border-b">
          <Image src="/assets/logo.svg" alt="logo" width={203.25} height={48} />
          <div className="flex gap-2 items-center">
            <LanguageSwitcher />
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
          </div>
        </div>

        <div className="relative flex items-center justify-between lg:py-4">
          <nav className="hidden lg:flex justify-between w-full lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base text-gray-700 hover:text-gray-900 capitalize"
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ease-in-out duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <RiCloseLine className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base text-gray-700 hover:text-gray-900 capitalize"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.name)}
            </Link>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
