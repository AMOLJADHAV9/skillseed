import React from 'react';
import { motion } from 'framer-motion';

/**
 * SocialProofSection — "Join 4,000+ families already learning"
 * Matches reference: small label, horizontal row of icon+wordmark logos,
 * all black/dark on white, simple clean layout.
 */

const brands = [
  {
    name: 'OdeaoLabs',
    logo: (
      <div className="flex items-center gap-2">
        {/* Pixel-grid mosaic icon */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="0"  y="0"  width="12" height="12" rx="2" fill="#7B93C8" opacity="0.9"/>
          <rect x="16" y="0"  width="12" height="12" rx="2" fill="#7B93C8" opacity="0.5"/>
          <rect x="0"  y="16" width="12" height="12" rx="2" fill="#7B93C8" opacity="0.5"/>
          <rect x="16" y="16" width="12" height="12" rx="2" fill="#7B93C8" opacity="0.9"/>
        </svg>
        <span className="text-[15px] font-bold text-slate-800 tracking-tight">OdeaoLabs</span>
      </div>
    ),
  },
  {
    name: 'Kintsugi',
    logo: (
      <div className="flex items-center gap-2">
        {/* 8-pointed star burst */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 0 L12.5 8 L20 4 L16 11 L22 14 L14 14.5 L16 22 L11 17 L6 22 L8 14.5 L0 14 L6 11 L2 4 L9.5 8 Z"
            fill="#111827"
          />
        </svg>
        <span className="text-[15px] font-bold text-slate-800 tracking-tight">Kintsugi</span>
      </div>
    ),
  },
  {
    name: 'Stackedlab',
    logo: (
      <div className="flex items-center gap-2">
        {/* Stacked layers icon */}
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
          <ellipse cx="12" cy="5"  rx="11" ry="4" fill="#111827" opacity="0.2"/>
          <ellipse cx="12" cy="11" rx="11" ry="4" fill="#111827" opacity="0.5"/>
          <ellipse cx="12" cy="17" rx="11" ry="4" fill="#111827"/>
        </svg>
        <span className="text-[15px] font-bold text-slate-800 tracking-tight">Stackedlab</span>
      </div>
    ),
  },
  {
    name: 'Magnolia',
    logo: (
      <div className="flex items-center gap-2">
        {/* Double-loop / infinity-like icon in pink */}
        <svg width="34" height="20" viewBox="0 0 34 20" fill="none">
          <path
            d="M8 10 C8 5 0 5 0 10 C0 15 8 15 8 10 C8 5 16 5 17 10 C18 15 26 15 26 10 C26 5 34 5 34 10 C34 15 26 15 26 10"
            stroke="#E879A0"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[15px] font-bold text-slate-800 tracking-tight">Magnolia</span>
      </div>
    ),
  },
  {
    name: 'Warpspeed',
    logo: (
      <div className="flex items-center gap-2">
        {/* Chain-link icon */}
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
          <rect x="0" y="4" width="12" height="12" rx="6" stroke="#111827" strokeWidth="2.5" fill="none"/>
          <rect x="16" y="4" width="12" height="12" rx="6" stroke="#111827" strokeWidth="2.5" fill="none"/>
          <line x1="11" y1="10" x2="17" y2="10" stroke="#111827" strokeWidth="2.5"/>
        </svg>
        <span className="text-[15px] font-bold text-slate-800 tracking-tight">Warpspeed</span>
      </div>
    ),
  },
  {
    name: 'Sisyphus',
    logo: (
      <div className="flex items-center gap-2">
        {/* Lightning bolt in green */}
        <svg width="18" height="26" viewBox="0 0 18 26" fill="none">
          <path
            d="M11 0 L3 14 L8 14 L7 26 L15 12 L10 12 Z"
            fill="#22C55E"
          />
        </svg>
        <span className="text-[15px] font-bold text-slate-800 tracking-tight">Sisyphus</span>
      </div>
    ),
  },
];

export const SocialProofSection = () => {
  return (
    <section className="bg-white border-y border-slate-100 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">

          {/* Label — exact match to reference */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-slate-400"
          >
            Join 4,000+ families already learning
          </motion.p>

          {/* Logo row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 xl:gap-x-14"
          >
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="opacity-75 hover:opacity-100 transition-opacity duration-200 cursor-default"
                title={brand.name}
              >
                {brand.logo}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
