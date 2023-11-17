'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { DiBugsense } from 'react-icons/di';
import classNames from 'classnames';

const links = [
  { label: 'Dashboard', href: '/' },
  { label: 'Issues', href: '/issues' },
];
const Navbar = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 border-b mb-5 h-14 items-center text-lg">
      <Link href="/">
        <DiBugsense className="inline w-24 h-24 text-blue-800" />
        <span className="text-blue-800">Iss</span>
        <span className="text-white bg-blue-700 p-1 rounded-full ">tra</span>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
