import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'Cinematic Video Editor Portfolio',
  description: 'A cinematic portfolio for a video editor and motion designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}