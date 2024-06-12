"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="https://i.imgur.com/u1fiTYz.png"
                width={150}
                height={150}
                alt="logo"
              />
              
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-gray-600">
          <p>&copy; 2024 PTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
