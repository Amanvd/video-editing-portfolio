"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset?: () => void }) {
  useEffect(() => {
    // Log client-side so devtools show the stack
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-display mb-4">Something went wrong</h1>
        <p className="mb-6 text-muted-foreground">An unexpected error occurred. Try refreshing or return later.</p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => reset && reset()}
            className="px-4 py-2 bg-accent text-accent-foreground rounded-md"
          >
            Try again
          </button>
          <a href="/" className="px-4 py-2 border border-border rounded-md">Home</a>
        </div>
      </div>
    </div>
  );
}
