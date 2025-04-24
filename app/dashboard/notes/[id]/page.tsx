'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';


import { db } from '@/configs/db';
import { Notes } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import NoteViewDialog from '../../_components/NoteViewDialog';
import { useUser } from '@clerk/nextjs';

export default function NotePage() {
  const id = useParams().id as string;
  const router = useRouter();
  const { user } = useUser();
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {

    const fetchNote = async () => {
      const result = await db.select().from(Notes).where(eq(Notes.id, id));

      if (!result[0]) {
        
        if (!user?.id) {
          throw new Error("User ID is undefined");
        }
        await db.insert(Notes).values({
          id,
          title: 'New Note',
          content: '',
          summary: '',
          createdBy: user?.id,
        });
        setTitle('New Note');
        setNote('');
        setSummary('');
      } else {
        setTitle(result[0].title || 'Untitled');
        setNote(result[0].content || '');
        setSummary(result[0].summary || '');
      }
    };

    fetchNote();
  }, [id]);

  const handleSave = async () => {
    setLoading(true);
    await db
      .update(Notes)
      .set({ content: note, title })
      .where(eq(Notes.id, id));
    setLoading(false);
  };

  const handleDelete = async () => {
    await db.delete(Notes).where(eq(Notes.id, id));
    router.push('/dashboard');
  };

  

  const handleGenerateSummary = async (): Promise<void> => {
    setGenerating(true);
    setSummary(''); // Clear previous summary
    try {
      if (!note.trim()) {
        alert("Note is empty. Please write something first.");
        return;
      }
  
      const response = await fetch('/api/generate-summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Summarize the following note:\n\n${note}`,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSummary(data.result);
       
        // Optional: Update the summary in the database
        await db
          .update(Notes)
          .set({ summary: data.result })
          .where(eq(Notes.id, id));
        console.log('Summary generated:', data.result);
      } else {
        console.error('Failed to generate summary:', data.error);
      }
    } catch (err) {
      console.error('Error generating summary:', err);
    }
    setGenerating(false);
  };
  

  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Note Editor */}
      <Card className="h-full">
        <CardHeader>
          <h2 className="text-lg font-semibold">📝 Your Note</h2>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input
            className="text-2xl font-semibold"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title"
          />
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={15}
            placeholder="Start writing your note..."
          />
          <div className="flex gap-4">
            
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
            <Button onClick={handleSave} disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </Button>
            {/* <Button onClick={() => setDialogOpen(true)} disabled={loading}> */}
              
               <NoteViewDialog
                  title={title}
                  content={note}
                  summary={summary}
                />
      
            {/* </Button> */}
          </div>
        </CardContent>
      </Card>

      {/* AI Summary */}
      <Card className="h-full">
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">🤖 AI Summary</h2>
          
        </CardHeader>
        <CardContent>
          <div className='w-full h-96 overflow-auto'>
          {summary ? (
            <p className="text-gray-700 dark:text-white whitespace-pre-wrap">{summary}</p>
          ) : (
            <p className="text-gray-400 italic">No summary available yet.</p>
          )}
          </div>

          <div className="flex gap-4">
            
            <Button size="sm" onClick={handleGenerateSummary} disabled={generating}>
            {generating ? 'Generating...' : 'Generate'}
            </Button>
          </div>
        </CardContent>
      </Card>
      
    </main>
  );
}
