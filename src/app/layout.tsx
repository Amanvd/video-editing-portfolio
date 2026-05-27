import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://amanedits.vercel.app';
const canonicalUrl = new URL('/', siteUrl).toString();
const openGraphImageUrl = new URL('/opengraph-image', siteUrl).toString();

export const metadata: Metadata = {
  title: 'Cinematic Video Editor Portfolio',
  description: 'A cinematic portfolio for a video editor and motion designer.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: 'Cinematic Video Editor Portfolio',
    description: 'A cinematic portfolio for a video editor and motion designer.',
    url: canonicalUrl,
    siteName: 'Cinematic Video Editor Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: openGraphImageUrl,
        width: 1200,
        height: 630,
        alt: 'Cinematic Video Editor Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinematic Video Editor Portfolio',
    description: 'A cinematic portfolio for a video editor and motion designer.',
    images: [openGraphImageUrl],
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            function ensureOverlay(){
              var id = 'client-error-overlay';
              var el = document.getElementById(id);
              if(el) return el;
              el = document.createElement('div');
              el.id = id;
              el.style.position = 'fixed';
              el.style.left = '0';
              el.style.right = '0';
              el.style.bottom = '0';
              el.style.zIndex = '99999';
              el.style.background = 'rgba(255,0,0,0.9)';
              el.style.color = '#fff';
              el.style.padding = '12px 16px';
              el.style.fontFamily = 'monospace';
              el.style.fontSize = '13px';
              el.style.display = 'none';
              el.style.whiteSpace = 'pre-wrap';
              document.body.appendChild(el);
              return el;
            }
            function show(msg){
              try{
                var el = ensureOverlay();
                el.textContent = msg;
                el.style.display = 'block';
              }catch(e){/* ignore */}
            }
            window.addEventListener('error', function(e){
              show('Error: ' + (e && e.message ? e.message : String(e)) + '\nSee console for stack.');
              console.error(e.error || e.message || e);
            });
            window.addEventListener('unhandledrejection', function(e){
              show('Unhandled Rejection: ' + (e && e.reason ? (e.reason.message || String(e.reason)) : String(e)) + '\nSee console for details.');
              console.error(e.reason || e);
            });
          })();
        ` }} />
        {children}
      </body>
    </html>
  );
}