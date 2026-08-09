import React from 'react';

/**
 * SkillSeedLogo Component
 * Premium logo for SkillSeed Web App featuring a glowing seed-sprout icon,
 * gradient typography, and subtitle badge.
 *
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} showSubtitle - whether to display "Phonics & STEM Academy"
 * @param {string} className - extra container CSS classes
 */
export const SkillSeedLogo = ({
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const sizeMap = {
    sm: { box: 'w-8 h-8', text: 'text-lg', sub: 'text-[8px]', gap: 'gap-2' },
    md: { box: 'w-11 h-11', text: 'text-xl sm:text-2xl', sub: 'text-[9px]', gap: 'gap-3' },
    lg: { box: 'w-14 h-14', text: 'text-2xl sm:text-3xl', sub: 'text-[10px]', gap: 'gap-3.5' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center ${currentSize.gap} group flex-shrink-0 ${className}`}>
      {/* Logo Badge Icon */}
      <div className={`${currentSize.box} rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-purple-600 p-[2px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 group-hover:shadow-emerald-500/35 transition-all duration-300`}>
        <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center overflow-hidden relative">
          {/* Logo Image */}
          <img
            src="/assets/skillseed-logo.png"
            alt="SkillSeed Logo"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              // Fallback to inline SVG sprout if image is missing
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback Vector SVG Sprout Icon */}
          <div className="hidden w-full h-full items-center justify-center bg-gradient-to-tr from-emerald-500 to-teal-400 text-white">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22v-9" />
              <path d="M12 13a7 7 0 0 0 7-7c0 0-4 0-7 7Z" />
              <path d="M12 13a7 7 0 0 1-7-7c0 0 4 0 7 7Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="leading-tight text-left">
        <span className={`${currentSize.text} font-black text-slate-900 tracking-tight flex items-center gap-0.5`}>
          Skill
          <span className="bg-gradient-to-r from-[#C04DF7] via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Seed
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse ml-0.5" />
        </span>
        {showSubtitle && (
          <span className={`${currentSize.sub} uppercase font-black text-emerald-600 tracking-widest block font-sans`}>
            Phonics &amp; STEM Academy
          </span>
        )}
      </div>
    </div>
  );
};

export default SkillSeedLogo;
