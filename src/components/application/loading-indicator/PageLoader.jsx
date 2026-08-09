import React from 'react';
import { motion } from 'framer-motion';
import { RingLoader } from './RingLoader';

/**
 * PageLoader — full-screen glass overlay shown on every route transition.
 * Uses the upgraded multi-ring SVG loader.
 */
export const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
      style={{
        background:
          'linear-gradient(135deg, rgba(250,245,248,0.97) 0%, rgba(243,232,255,0.97) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-[-80px] right-[-60px] w-96 h-96 rounded-full bg-purple-300 opacity-20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-40px] left-[-40px] w-80 h-80 rounded-full bg-pink-300 opacity-20 blur-[100px] pointer-events-none" />

      {/* Upgraded SVG Multi-Ring Loader */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.35, type: 'spring' }}
        className="flex flex-col items-center gap-4"
      >
        <RingLoader size="5.5em" theme="purple" glow={true} />
        
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl font-black text-slate-900 tracking-tight">
            Learn<span className="text-[#C04DF7]">2</span>Read
          </span>
          <p className="text-xs font-bold text-purple-600/70 tracking-widest uppercase">
            Loading...
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

