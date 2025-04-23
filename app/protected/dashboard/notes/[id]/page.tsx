import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Props {
  params: { id: string  };
}

export default async function NotePage({ params }: Props) {
  const supabase = createClient();
  const { data: note, error } = await supabase
    .from("notes")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!note || error) return notFound();

  return (
    <main className="flex justify-center p-4">
      <Card className="w-full max-w-3xl shadow-lg border bg-background">
        <CardHeader>
          <h1 className="text-3xl font-bold text-foreground">{note.title}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Created: {new Date(note.created_at).toLocaleDateString()}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-base leading-relaxed text-foreground whitespace-pre-wrap">
            {note.content}
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline">Edit</Button>
            <Button variant="destructive">Delete</Button>
            <Button>Summarize</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
