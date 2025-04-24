// app/dashboard/layout.tsx
import React from 'react';
import Navbar from './_components/navbar';
import Sidebar from './_components/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex flex-col bg-white dark:bg-zinc-900 text-black dark:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {/* <aside className="w-64 bg-zinc-100 dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 p-4 overflow-y-auto hidden sm:block">
          <Sidebar />
        </aside> */}

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
