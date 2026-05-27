export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-display mb-4">Page not found</h1>
        <p className="mb-6 text-muted-foreground">We couldn&apos;t find the page you&apos;re looking for.</p>
        <a href="/" className="px-4 py-2 bg-accent text-accent-foreground rounded-md">Return home</a>
      </div>
    </div>
  );
}
