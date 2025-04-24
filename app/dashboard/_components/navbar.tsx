// components/Navbar.tsx
'use client';

import Link from 'next/link';


import { ThemeSwitcher } from '@/components/theme-switcher';
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <nav className="w-full px-4 sm:px-8 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-700 h-16 bg-white dark:bg-zinc-900">
      <div className="text-xl font-bold text-gray-900 dark:text-white">
        🧠 BrainBin
      </div>

      <div className="flex gap-10 items-center">
      <Link
  href="/dashboard"
  className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-all shadow-md dark:bg-white dark:text-black dark:hover:bg-gray-200"
>
  Dashboard
</Link>

        <ThemeSwitcher />

        <UserButton />
      </div>
    </nav>
  );
}
