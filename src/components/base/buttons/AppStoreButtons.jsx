import React from 'react';

// ─── Google Play Button ───────────────────────────────────────────────────────
export const GooglePlayButton = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-9 px-3 gap-2 text-[10px]',
    md: 'h-11 px-4 gap-2.5 text-xs',
    lg: 'h-14 px-5 gap-3 text-sm',
  };

  return (
    <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center bg-black hover:bg-neutral-900 border border-neutral-700 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-md ${sizeClasses[size]} ${className}`}
      aria-label="Get it on Google Play"
    >
      {/* Google Play Icon */}
      <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.18 1.07C2.77 1.31 2.5 1.77 2.5 2.36v19.28c0 .59.27 1.05.68 1.29l.1.06 10.8-10.8v-.26L3.18 1.07z" fill="url(#gp1)" />
        <path d="M17.42 15.44l-3.6-3.6v-.27l3.6-3.6.08.05 4.27 2.43c1.22.69 1.22 1.82 0 2.51l-4.27 2.43-.08.05z" fill="url(#gp2)" />
        <path d="M17.5 15.39L13.82 11.7 3.18 22.36c.4.28.96.31 1.52 0l12.8-6.97" fill="url(#gp3)" />
        <path d="M17.5 8.61L4.7 1.64c-.56-.31-1.12-.28-1.52 0L13.82 12.3l3.68-3.69z" fill="url(#gp4)" />
        <defs>
          <linearGradient id="gp1" x1="13.5" y1="1.07" x2="-2.11" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00A0FF" /><stop offset="0.007" stopColor="#00A1FF" /><stop offset="0.26" stopColor="#00BEFF" />
            <stop offset="0.51" stopColor="#00D2FF" /><stop offset="0.76" stopColor="#00DFFF" /><stop offset="1" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient id="gp2" x1="22.21" y1="11.97" x2="2.29" y2="11.97" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE000" /><stop offset="0.41" stopColor="#FFBD00" /><stop offset="0.78" stopColor="#FFA500" /><stop offset="1" stopColor="#FF9C00" />
          </linearGradient>
          <linearGradient id="gp3" x1="15.28" y1="13.81" x2="-2.01" y2="30.84" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3A44" /><stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient id="gp4" x1="0.52" y1="-4.77" x2="8.34" y2="3.17" gradientUnits="userSpaceOnUse">
            <stop stopColor="#32A071" /><stop offset="0.07" stopColor="#2DA771" /><stop offset="0.48" stopColor="#15CF74" /><stop offset="0.8" stopColor="#06E775" /><stop offset="1" stopColor="#00F076" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col leading-tight text-left">
        <span className="text-neutral-400 font-medium" style={{ fontSize: '0.6rem' }}>GET IT ON</span>
        <span className="text-white font-bold tracking-wide" style={{ fontSize: size === 'sm' ? '0.7rem' : size === 'lg' ? '1rem' : '0.85rem' }}>
          Google Play
        </span>
      </div>
    </a>
  );
};

// ─── App Store Button ─────────────────────────────────────────────────────────
export const AppStoreButton = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-9 px-3 gap-2',
    md: 'h-11 px-4 gap-2.5',
    lg: 'h-14 px-5 gap-3',
  };

  return (
    <a
      href="https://apps.apple.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center bg-black hover:bg-neutral-900 border border-neutral-700 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-md ${sizeClasses[size]} ${className}`}
      aria-label="Download on the App Store"
    >
      {/* Apple Icon */}
      <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>

      <div className="flex flex-col leading-tight text-left">
        <span className="text-neutral-400 font-medium" style={{ fontSize: '0.6rem' }}>Download on the</span>
        <span className="text-white font-bold tracking-wide" style={{ fontSize: size === 'sm' ? '0.7rem' : size === 'lg' ? '1rem' : '0.85rem' }}>
          App Store
        </span>
      </div>
    </a>
  );
};

// ─── Galaxy Store Button ──────────────────────────────────────────────────────
export const GalaxyStoreButton = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-9 px-3 gap-2',
    md: 'h-11 px-4 gap-2.5',
    lg: 'h-14 px-5 gap-3',
  };

  return (
    <a
      href="https://galaxystore.samsung.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center bg-black hover:bg-neutral-900 border border-neutral-700 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-md ${sizeClasses[size]} ${className}`}
      aria-label="Get it on Galaxy Store"
    >
      {/* Samsung Galaxy Store Icon (stylised S circle) */}
      <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="url(#gal1)" />
        <path
          d="M16.5 9.5C16.5 7.57 14.93 6 13 6H8v2h5c.83 0 1.5.67 1.5 1.5S13.83 11 13 11H11c-1.93 0-3.5 1.57-3.5 3.5S9.07 18 11 18h5v-2h-5c-.83 0-1.5-.67-1.5-1.5S10.17 13 11 13h2c1.93 0 3.5-1.57 3.5-3.5z"
          fill="white"
        />
        <defs>
          <linearGradient id="gal1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1428A0" /><stop offset="1" stopColor="#1DA1F2" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col leading-tight text-left">
        <span className="text-neutral-400 font-medium" style={{ fontSize: '0.6rem' }}>GET IT ON</span>
        <span className="text-white font-bold tracking-wide" style={{ fontSize: size === 'sm' ? '0.7rem' : size === 'lg' ? '1rem' : '0.85rem' }}>
          Galaxy Store
        </span>
      </div>
    </a>
  );
};
