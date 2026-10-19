"use client";

import Link from "next/link";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

const Dropdown = ({ label, items }) => (
  <Menu as="div" className="relative">
    <MenuButton className="site-nav-link">
      {label}
      <svg aria-hidden="true" width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.2" /></svg>
    </MenuButton>
    <MenuItems className="site-dropdown absolute left-0 z-50 mt-3 w-64 rounded-sm border border-slate-200 bg-white p-2 focus:outline-none">
      {items.map((item) => (
        <MenuItem key={item.href} disabled={item.isDisabled}>
          {item.isDisabled ? <span className="block px-4 py-3 text-xs text-gray-500">{item.label}</span> : <Link href={item.href} className="block px-4 py-3 text-xs font-medium tracking-wider text-gray-700 data-[focus]:bg-gray-100">{item.label}</Link>}
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
);

export default Dropdown;
