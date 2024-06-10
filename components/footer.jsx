"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="https://i.imgur.com/NJO8gUO.png"
                width={50}
                height={50}
                alt="logo"
              />
              <p className="font-bold text-xl text-gray-800">PTS</p>
            </Link>
          </div>
          <div className="flex gap-6">
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
