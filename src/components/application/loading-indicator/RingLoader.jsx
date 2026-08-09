import React from 'react';

/**
 * RingLoader Component
 * Upgraded 4-ring interlocking SVG loader with custom properties, themes & glow support.
 *
 * @param {string} size - e.g. '80px', '6em', '120px'
 * @param {string} theme - 'default' | 'purple' | 'neon'
 * @param {boolean} glow - whether to apply drop-shadow glow effect
 * @param {string} className - extra CSS classes
 */
export const RingLoader = ({
  size = '6em',
  theme = 'default',
  glow = true,
  className = '',
  style = {}
}) => {
  const themeClass = theme === 'purple' ? 'pl--purple' : theme === 'neon' ? 'pl--neon' : '';
  const glowClass = glow ? 'pl--glow' : '';

  return (
    <svg
      className={`pl ${themeClass} ${glowClass} ${className}`}
      style={{ width: size, height: size, ...style }}
      viewBox="0 0 240 240"
      aria-label="Loading..."
      role="status"
    >
      <circle
        className="pl__ring pl__ring--a"
        cx="120"
        cy="120"
        r="105"
        fill="none"
        strokeWidth="20"
        strokeDasharray="0 660"
        strokeDashoffset="-330"
        strokeLinecap="round"
      />
      <circle
        className="pl__ring pl__ring--b"
        cx="120"
        cy="120"
        r="35"
        fill="none"
        strokeWidth="20"
        strokeDasharray="0 220"
        strokeDashoffset="-110"
        strokeLinecap="round"
      />
      <circle
        className="pl__ring pl__ring--c"
        cx="85"
        cy="120"
        r="70"
        fill="none"
        strokeWidth="20"
        strokeDasharray="0 440"
        strokeLinecap="round"
      />
      <circle
        className="pl__ring pl__ring--d"
        cx="155"
        cy="120"
        r="70"
        fill="none"
        strokeWidth="20"
        strokeDasharray="0 440"
        strokeLinecap="round"
      />
    </svg>
  );
};
