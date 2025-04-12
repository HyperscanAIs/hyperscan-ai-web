"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/3.5-05.png"
                alt="Hyperscan Logo"
                width={80}
                height={80}
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="#features"
                className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#about"
                className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="#pricing"
                className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#blog"
                className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <div className="ml-4 glow-effect">
                <WalletMultiButton
                  className="text-white rounded-md"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-hidden"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/90 backdrop-blur-md">
          <Link
            href="#features"
            className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#about"
            className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#pricing"
            className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#blog"
            className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <div className="w-full mt-4" onClick={() => setIsOpen(false)}>
            <WalletMultiButton className="w-full glow-effect bg-primary hover:bg-primary/90 text-white rounded-md" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
