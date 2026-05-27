import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Cinematic Video Editor Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '72px',
          background: 'linear-gradient(135deg, #050505 0%, #111111 55%, #ff7a1a 100%)',
          color: '#f3f1ed',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: 30, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.9 }}>
            Aman Edits
          </div>
          <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.05em', maxWidth: 880 }}>
            Cinematic Video Editor Portfolio
          </div>
        </div>
        <div style={{ fontSize: 30, maxWidth: 760, lineHeight: 1.25, color: '#f3f1ed', opacity: 0.92 }}>
          A cinematic portfolio for editing, motion, and visual storytelling.
        </div>
      </div>
    ),
    size,
  );
}