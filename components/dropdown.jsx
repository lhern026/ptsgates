"use client";

import Link from "next/link";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

const Dropdown = ({ label, items }) => (
  <Menu as="div" className="relative">
    <MenuButton className="inline-flex rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">
      {label}
    </MenuButton>
    <MenuItems className="absolute left-0 z-50 mt-2 w-64 rounded-md bg-white py-1 shadow-lg ring-1 ring-black/10 focus:outline-none">
      {items.map((item) => (
        <MenuItem key={item.href} disabled={item.isDisabled}>
          {item.isDisabled ? <span className="block px-4 py-2 text-sm text-gray-400">{item.label}</span> : <Link href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">{item.label}</Link>}
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
);

export default Dropdown;
