'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { DiBugsense } from 'react-icons/di';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from '@radix-ui/themes';

const links = [
  { label: 'Dashboard', href: '/' },
  { label: 'Issues', href: '/issues' },
];
const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <div className="flex text-sm items-center  md:text-lg pr-8">
              <Link href="/">
                {/* <DiBugsense className="inline w-12 h-12 text-blue-800 " /> */}
                {/* <span className="text-white bg-blue-700 p-1 rounded-full ">tra</span>
        <span className="text-blue-800">Iss</span> */}
              </Link>
              {/* <p className="font-extrabold text-transparent text-xl  bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-transparent h-full"> */}
              <p className="flex items-bottom font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-transparent h-full">
                ISSTraker
              </p>
              {/* <span className="text-white font-extrabold bg-amber-500 p-1 rounded-full ">
                ISS
              </span>
              <span className="text-amber-700 font-extrabold ">Tracker</span> */}
            </div>
            <ul className="flex  space-x-8 max-sm:hidden">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={classNames({
                      'text-zinc-600 font-bold underline underline-offset-18':
                        link.href === currentPath,
                      'text-zinc-500': link.href !== currentPath,
                      ' hover:text-zinc-600 transition-colors underline-offset-18':
                        true,
                      // 'nav-link': true,
                      // '!text-zinc-900': link.href === currentPath,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return null;

  if (status === 'unauthenticated')
    return (
      <Link className="nav-link" href="/api/auth/signin">
        Login
      </Link>
    );

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user!.image!}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};
