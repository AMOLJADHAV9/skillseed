import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-extrabold rounded-2xl transition-all duration-200 cursor-pointer shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 hover:from-purple-400 hover:to-indigo-500 text-white shadow-purple-500/25 glow-purple border border-purple-400/30',
    amber: 'bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 shadow-amber-500/25 glow-amber border border-amber-300/40',
    emerald: 'bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 hover:from-emerald-300 hover:to-teal-400 text-slate-950 shadow-emerald-500/25 glow-emerald border border-emerald-300/40',
    pink: 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 hover:from-pink-400 hover:to-rose-400 text-white shadow-pink-500/25 glow-pink border border-pink-400/30',
    glass: 'glass-card hover:bg-slate-800/80 text-white border border-white/20 hover:border-purple-400/40 shadow-slate-900/50',
    outline: 'border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 text-purple-300'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-3.5',
    xl: 'px-10 py-5 text-lg gap-4 rounded-3xl'
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.03, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.96 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon className="text-lg" />}
      {children}
    </motion.button>
  );
};
