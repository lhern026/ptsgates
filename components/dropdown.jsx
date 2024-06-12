"use client";

import React from 'react';

const Dropdown = ({ label, items }) => {
  return (
    <div className="relative inline-block text-left group">
      <button
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        {label}
      </button>
      <div
        className="opacity-0 group-hover:opacity-100 absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;