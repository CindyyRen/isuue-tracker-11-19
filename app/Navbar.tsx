'use client';
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
    <nav className="flex space-x-1 md:space-x-6 border-b mb-5 h-14 items-center text-sm md:text-lg">
      <div className="flex text-sm items-center  md:text-lg">
        <Link href="/">
          <DiBugsense className="inline w-20 h-20 text-blue-800 " />
          {/* <span className="text-white bg-blue-700 p-1 rounded-full ">tra</span>
        <span className="text-blue-800">Iss</span> */}
        </Link>

        <p className="flex items-bottom font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-transparent h-full">
          IssTracker
        </p>
      </div>
      <ul className="flex  space-x-8 max-sm:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              'text-zinc-700 font-bold underline underline-offset-18':
                link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              ' hover:text-zinc-800 transition-colors underline-offset-18':
                true,
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
