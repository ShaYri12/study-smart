import Image from "next/image";
import Link from "next/link";
import { IoMail, IoTime } from "react-icons/io5";
import { FaPhone, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const navigation = {
  column1: [
    { name: "Home", href: "/" },
    { name: "Mag", href: "/mag" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  column2: [
    { name: "Training", href: "/training" },
    { name: "Consulting", href: "/consulting" },
    { name: "Study Groups", href: "/study-groups" },
    { name: "Coaching", href: "/coaching" },
    { name: "Professional Services", href: "/services" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "LinkedIn", href: "#", icon: FaLinkedin },
  { name: "Twitter", href: "#", icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a337e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <IoMail className="w-6 h-6 text-white/80" />
                <div>
                  <span className="text-white/80">Email: </span>
                  <a
                    href="mailto:contact@studysmart.com"
                    className="hover:text-white/80"
                  >
                    contact@studysmart.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-white/80" />
                <div>
                  <span className="text-white/80">Phone: </span>
                  <a href="tel:+15551234567" className="hover:text-white/80">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <IoTime className="w-6 h-6 text-white/80 mt-1" />
                <div>
                  <span className="text-white/80">Business Hours: </span>
                  <span className="block">
                    Monday to Friday, 9:00 AM - 6:00 PM EST
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              {navigation.column1.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 hover:text-white/80"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              {navigation.column2.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 hover:text-white/80"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Image
                  src="/assets/footer-logo.svg"
                  alt="logo"
                  width={169.38}
                  height={48}
                />
              </div>
            </div>

            <div className="text-sm text-white/80">
              © 2024 StudySmart. All Right Reserved.
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-white/80"
                    aria-label={item.name}
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
