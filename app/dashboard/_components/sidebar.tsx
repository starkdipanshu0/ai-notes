// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 text-sm font-medium">
      <Link
        href="/dashboard"
        className="hover:bg-zinc-200 dark:hover:bg-zinc-700 p-2 rounded"
      >
        🏠 Home
      </Link>
      <Link
        href="/dashboard/notes"
        className="hover:bg-zinc-200 dark:hover:bg-zinc-700 p-2 rounded"
      >
        📝 Notes
      </Link>
      <Link
        href="/dashboard/settings"
        className="hover:bg-zinc-200 dark:hover:bg-zinc-700 p-2 rounded"
      >
        ⚙️ Settings
      </Link>
    </div>
  );
};

export default Sidebar;
