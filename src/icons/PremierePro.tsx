import React from 'react';

export default function PremierePro({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Adobe Premiere Pro">
      <rect width="48" height="48" rx="6" fill="none" />
      <g fill="#4E2A84" fontFamily="Inter, Arial, sans-serif" fontWeight={700} fontSize="20">
        <text x="50%" y="60%" textAnchor="middle">Pr</text>
      </g>
    </svg>
  );
}
