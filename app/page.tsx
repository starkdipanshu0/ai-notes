
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col gap-16 px-4 py-16 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Capture your ideas, <br /> Summarize with AI
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A smarter way to take notes. Create, organize, and summarize your thoughts effortlessly with AI-powered assistance.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="mt-4">Get Started</Button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl border shadow-sm">
            <h3 className="text-xl font-semibold">Instant Notes</h3>
            <p className="text-muted-foreground mt-2">
              Quickly jot down your ideas and access them from anywhere.
            </p>
          </div>

          <div className="p-6 rounded-xl border shadow-sm">
            <h3 className="text-xl font-semibold">AI Summarization</h3>
            <p className="text-muted-foreground mt-2">
              Let AI convert long notes into concise summaries.
            </p>
          </div>

          <div className="p-6 rounded-xl border shadow-sm">
            <h3 className="text-xl font-semibold">Organized by Default</h3>
            <p className="text-muted-foreground mt-2">
              All your notes neatly categorized and easy to find.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground border-t pt-6 mt-8">
          © {new Date().getFullYear()} BrainBin. All rights reserved.
          <br />
          <br />
          Built with ❤️ by Dipanshu Vishwakarma
        </footer>
      </main>
    </>
  );
}
