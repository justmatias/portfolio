'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ThemeToggle } from '@/components/features/header/theme-toggle';
import { MenuButton } from '@/components/features/header/menu-button';

export const Header = () => {
  const pathname = usePathname();
  const [show, setShow] = React.useState<boolean>(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/resources', label: 'Resources' },
  ];

  return (
    <header className='flex sticky bg-background z-50 top-0 justify-between min-h-24 items-center px-2'>
      <h1 className='font-bold text-2xl lg:text-3xl text-blue-500 max-w-10 sm:max-w-none'>
        <Link href='/'>Matias Gimenez</Link>
      </h1>
      <nav>
        <MenuButton show={show} setShow={setShow} />
        <ul
          className={`${
            show
              ? 'fixed right-0 px-10 pb-4 rounded-md top-20 py-2 h-full gap-4'
              : 'hidden'
          } bg-background z-50 md:p-0 flex flex-col gap-4 border border-blue-500 border-t-0 border-r-0 rounded-t-none md:border-0 md:gap-6 font-medium text-lg md:relative md:flex-row md:flex md:top-0 md:right-0`}
        >
          {links.map(({ href, label }) => {
            return (
              <li
                key={href}
                className={`text-right md:text-center ${
                  pathname === href && 'text-blue-500 font-bold'
                }`}
              >
                <Link href={href} onClick={() => setShow(false)}>
                  {label}
                </Link>
              </li>
            );
          })}
          <li className='text-right md:text-center md:mt-1'>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};
