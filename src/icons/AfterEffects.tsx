import React from 'react';

export default function AfterEffects({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Adobe After Effects">
      <rect width="48" height="48" rx="6" fill="none" />
      <g fill="#5B2B90" fontFamily="Inter, Arial, sans-serif" fontWeight={800} fontSize="18">
        <text x="50%" y="60%" textAnchor="middle">Ae</text>
      </g>
    </svg>
  );
}
