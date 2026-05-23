import React from 'react';

export default function DaVinciResolve({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DaVinci Resolve">
      <rect width="48" height="48" rx="6" fill="none" />
      <g transform="translate(6,6) scale(0.75)">
        <circle cx="16" cy="16" r="14" fill="none" stroke="none" />
        <path d="M16 2 A14 14 0 0 1 29.9 16 L16 16 Z" fill="#00A8E8" />
        <path d="M29.9 16 A14 14 0 0 1 16 29.9 L16 16 Z" fill="#FF3B7F" />
        <path d="M16 29.9 A14 14 0 0 1 2 16 L16 16 Z" fill="#FFD400" />
      </g>
    </svg>
  );
}
