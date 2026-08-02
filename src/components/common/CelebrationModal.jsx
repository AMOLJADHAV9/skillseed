import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGamification } from '../../context/GamificationContext';
import { Sparkles, Trophy, Flame, CheckCircle, X } from 'lucide-react';
import { Button } from './Button';

export const CelebrationModal = () => {
  const { celebrationModal, closeCelebration } = useGamification();

  if (!celebrationModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="relative w-full max-w-md p-8 overflow-hidden border glass-card rounded-3xl border-purple-500/30 text-center shadow-2xl"
        >
          {/* Background Glow Mesh */}
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-amber-500/30 rounded-full blur-3xl" />

          {/* Close Button */}
          <button
            onClick={closeCelebration}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Animated Icon Trophy */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-5xl shadow-xl shadow-amber-500/30 animate-float"
          >
            {celebrationModal.icon || '🏆'}
          </motion.div>

          <h2 className="text-3xl font-black gradient-text-amber mb-2">
            {celebrationModal.title}
          </h2>

          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            {celebrationModal.message}
          </p>

          {/* XP Rewards Pill */}
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-slate-900/90 rounded-2xl border border-amber-500/40 shadow-inner">
            <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
            <span className="text-xl font-extrabold text-amber-300">
              +{celebrationModal.xpEarned || 50} XP
            </span>
            <span className="text-slate-400 text-xs font-semibold">REWARD</span>
          </div>

          <div>
            <Button
              variant="amber"
              size="lg"
              className="w-full font-black text-slate-950"
              onClick={closeCelebration}
            >
              Continue Learning 🚀
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
