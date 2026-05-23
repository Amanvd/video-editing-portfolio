import React from 'react';

export default function Figma({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Figma">
      <rect width="48" height="48" rx="6" fill="none" />
      <g transform="translate(6,6) scale(0.75)">
        <circle cx="6" cy="4" r="3.2" fill="#F24E1E" />
        <circle cx="6" cy="10" r="3.2" fill="#A259FF" />
        <circle cx="10.5" cy="7" r="3.2" fill="#FF7262" />
        <circle cx="14" cy="4" r="3.2" fill="#1ABCFE" />
        <circle cx="14" cy="10" r="3.2" fill="#00CF9D" />
      </g>
    </svg>
  );
}
