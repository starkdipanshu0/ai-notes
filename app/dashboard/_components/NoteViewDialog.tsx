'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface NoteViewDialogProps {
  title: string;
  content: string;
  summary: string;
}

export default function NoteViewDialog({ title, content, summary ,  }: NoteViewDialogProps) {
    
  return (
    <Dialog >
      <DialogTrigger  >
        <Button variant="outline">View Note</Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{title || 'Untitled Note'}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 mt-4 max-h-[70vh] overflow-y-auto">
          <section>
            <h3 className="text-md font-medium text-muted-foreground mb-1">📝 Content</h3>
            <p className="whitespace-pre-wrap text-sm text-gray-800 border rounded-md p-4 bg-gray-50">
              {content || 'No content available.'}
            </p>
          </section>
          <section>
            <h3 className="text-md font-medium text-muted-foreground mb-1">🤖 AI Summary</h3>
            <p className="whitespace-pre-wrap text-sm text-gray-800 border rounded-md p-4 bg-gray-50">
              {summary || 'No summary generated yet.'}
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
