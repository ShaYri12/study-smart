import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoGlobeOutline } from "react-icons/io5";
import { useTranslation } from "next-i18next";
import { usePathname, useRouter } from "next/navigation";

// Language codes
const languages = ["en", "ar"];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]); // Default to 'en'
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { i18n, ready } = useTranslation(); // Get ready state
  const pathname = usePathname(); // Get the current path
  const router = useRouter(); // Use the navigation router

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Ensure i18n is ready before changing language
  const switchLanguage = (language: string) => {
    if (ready && i18n) {
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
      setIsOpen(false);
      // Push new locale into the URL (handles switching between languages)
      const newPath = `/${language}${pathname.replace(/^\/[a-z]{2}/, "")}`;
      router.push(newPath); // Adjusted to handle language change without affecting the rest of the URL
    }
  };

  // Ensure we are using the correct language from the URL on initial render
  useEffect(() => {
    const currentLang = pathname.split("/")[1]; // Grab the language from the URL
    if (languages.includes(currentLang) && ready && i18n) {
      setCurrentLanguage(currentLang);
      i18n.changeLanguage(currentLang); // Update language based on the URL
    }
  }, [pathname, i18n, ready]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-[8px] text-sm text-gray-600 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <IoIosArrowDown
          className={`w-[18px] h-[18px] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        <span>{currentLanguage.toUpperCase()}</span>
        <IoGlobeOutline className="w-[20px] h-[20px]" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => switchLanguage(language)}
              className={`w-full px-4 py-2 text-sm text-left flex items-center justify-between ${
                currentLanguage === language
                  ? "bg-blueish text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
