'use client';

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

import { db } from "@/configs/db";
import { Notes } from "@/configs/schema";
import { eq } from "drizzle-orm";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();

  const [notes, setNotes] = useState<any[]>([]);

  // Fetch notes from DB
  useEffect(() => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    const fetchNotes = async () => {
      const result = await db
        .select()
        .from(Notes)
        .where(eq(Notes.createdBy , user?.primaryEmailAddress?.emailAddress));

      setNotes(result as any[]);
    };

    fetchNotes();
  }, [user]);

  // Create and redirect to a new note
  const handleCreateNew = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    const newNoteId = uuidv4();

    await db.insert(Notes).values({
      id: newNoteId,
      title: "Untitled Note",
      content: "",
      summary: "",
      createdBy: user.primaryEmailAddress.emailAddress,
    });

    router.push(`/dashboard/notes/${newNoteId}`);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <section className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">My Notes</h1>
        <Button onClick={handleCreateNew}>Create New Note</Button>
      </section>

      {/* Notes Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map((note) => (

          <Card key={note.id} onClick={() => router.push(`/dashboard/notes/${note.id}`)} className="cursor-pointer hover:shadow-md transition">
            <CardContent className="p-4">
              <h2 className="font-semibold text-lg truncate">{note.title || "Untitled"}</h2>
              <p className="text-sm text-muted-foreground line-clamp-2">{note.summary || "No summary available."}</p>
            </CardContent>
            
          </Card>
        ))}
      </section>
    </main>
  );
}


