'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Dashboard() {
  const { theme } = useTheme();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <section className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">
          My Notes
        </h1>

        <div className="flex gap-2">
          {/* Optional: theme toggle */}
          <Link href="/dashboard/new">
            <Button>Create New Note</Button>
          </Link>
        </div>
      </section>

      {/* Notes Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Example Note Card */}
        <Card className="transition hover:shadow-lg bg-background border-border">
          <CardContent className="p-4">
            <h2 className="text-lg font-medium text-foreground">Meeting Notes</h2>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
              Discussed upcoming features and roadmap. Tasks assigned to John & Sarah...
            </p>
            <div className="mt-4 flex justify-between">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="ghost" size="sm">Summarize</Button>
            </div>
          </CardContent>
        </Card>

        {/* Repeat dynamically */}
      </section>
    </main>
  );
}


