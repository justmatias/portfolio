'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (theme === 'dark') {
    return (
      <button onClick={() => setTheme('light')}>
        <SunIcon className='w-5 h-5' />
      </button>
    );
  }

  return (
    <button onClick={() => setTheme('dark')}>
      <MoonIcon className='w-5 h-5' />
    </button>
  );
}
