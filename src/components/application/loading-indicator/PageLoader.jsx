import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageLoader — full-screen glass overlay shown on every route transition.
 * Uses a single animated dot-circle spinner.
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

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.35, type: 'spring' }}
        className="flex flex-col items-center gap-3"
      >
        <div className="w-16 h-16 rounded-full bg-white border-4 border-purple-200 shadow-2xl flex items-center justify-center text-3xl">
          🍎
        </div>
        <span className="text-xl font-black text-slate-900 tracking-tight">
          Learn<span className="text-[#C04DF7]">2</span>Read
        </span>
      </motion.div>

      {/* Single dot-circle loader */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex items-center gap-2"
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full bg-[#C04DF7]"
            animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">
        Loading...
      </p>
    </motion.div>
  );
};
