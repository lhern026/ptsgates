"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 bg-cover bg-center" style={{
        backgroundImage: "url('https://i.imgur.com/1YbLl5R.jpeg')",
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="https://i.imgur.com/u1fiTYz.png"
                width={220}
                height={220}
                alt="logo"
                className="rounded-full"
              />
             
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <Link href="/about" className="hidden md:block text-black hover:text-white transition duration-300">
              About
            </Link>
            <Link href="/services" className="hidden md:block text-white hover:text-blue transition duration-300">
              Services
            </Link>
            <Link href="/contact" className="text-black hover:text-red-100 transition duration-300">
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2024 PTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
