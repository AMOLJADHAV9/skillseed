import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, Send, CheckCircle } from 'lucide-react';

/**
 * NewsletterBanner
 * Displayed just above the footer on every public page.
 * Inspired by the BannerTextFieldDefault design pattern.
 */
export const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative mx-4 mb-6 lg:mx-8 xl:mx-auto xl:max-w-6xl"
      >
        <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6 glass-card rounded-2xl px-5 py-4 md:px-6 md:py-4 shadow-lg overflow-hidden">

          {/* Purple glow blob inside card */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-[#C04DF7] opacity-10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 right-10 w-40 h-40 rounded-full bg-pink-400 opacity-10 blur-3xl pointer-events-none" />

          {/* Mail icon — hidden on mobile */}
          <div className="hidden md:flex w-11 h-11 rounded-xl bg-purple-100 flex-shrink-0 items-center justify-center">
            <Mail className="w-5 h-5 text-[#C04DF7]" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0 pr-8 md:pr-0">
            <p className="text-sm font-black text-slate-900 truncate">
              Stay up to date with the latest news{' '}
              <span className="hidden md:inline">and reading tips</span>
            </p>
            <p className="text-xs text-slate-500 font-semibold truncate mt-0.5">
              Get weekly phonics guides, parenting tips, and course updates delivered to your inbox.
            </p>
          </div>

          {/* Form or Success state */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-black"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  You're subscribed! 🎉
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-2 w-full md:w-auto"
                >
                  <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="glass-input flex-1 md:w-56 px-4 py-2.5 rounded-xl text-xs font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C04DF7] hover:bg-[#b03de5] text-white font-black text-xs rounded-xl shadow-md shadow-purple-400/20 transition cursor-pointer flex-shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Subscribe
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Dismiss button — top right */}
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 transition cursor-pointer flex-shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};
