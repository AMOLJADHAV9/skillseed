import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sprout,
  ArrowRight,
  BookOpen,
  Video,
  Calculator,
  BookMarked,
  Users,
  Award,
  Zap,
  Star,
  Send,
  Grid
} from 'lucide-react';

const CATEGORIES = [
  { id: 'All', label: 'All', icon: Grid },
  { id: 'Phonics', label: 'Phonics', icon: BookOpen },
  { id: 'Live Zoom', label: 'Live Zoom', icon: Video },
  { id: 'Math & Logic', label: 'Math & Logic', icon: Calculator },
  { id: 'Hindi Story', label: 'Hindi Story', icon: BookMarked },
  { id: 'Group Fun', label: 'Group Fun', icon: Users },
];

export const KidsPhotoGallery = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Filter items based on tab
  const showAll = activeTab === 'All';

  return (
    <section className="py-20 md:py-28 bg-[#FAFBFF] relative overflow-hidden text-slate-900 font-sans">
      
      {/* ─── BACKGROUND AMBIENT GLOWS & REFERENCE PATTERN ────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        
        {/* Subtle Radial Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1.2px,transparent_1.2px)] [background-size:26px_26px] opacity-20 z-0" />

        {/* 1. Vibrant Organic Lime Green Left Wave Backdrop (Matching Image) */}
        <div className="absolute -left-[14%] top-[-10%] w-[58%] h-[120%] z-0 hidden lg:block opacity-90">
          <svg viewBox="0 0 600 700" fill="none" className="w-full h-full">
            <path
              d="M -100 -50 C 200 -50, 480 80, 420 320 C 360 560, 150 680, -100 750 Z"
              fill="url(#photoGalleryLimeGrad)"
            />

            {/* Concentric White Ripple Contours on Lime Green Blob */}
            <circle cx="80" cy="500" r="120" stroke="white" strokeWidth="2" strokeOpacity="0.25" fill="none" />
            <circle cx="80" cy="500" r="200" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" />
            <circle cx="80" cy="500" r="280" stroke="white" strokeWidth="2" strokeOpacity="0.18" fill="none" />
            <circle cx="80" cy="500" r="360" stroke="white" strokeWidth="2" strokeOpacity="0.15" fill="none" />
            <circle cx="80" cy="500" r="440" stroke="white" strokeWidth="2" strokeOpacity="0.12" fill="none" />

            {/* Hand-Drawn Loop-the-Loop White Trail on Left */}
            <path
              d="M 60 220 C 120 180, 160 260, 110 300 C 70 330, 90 400, 180 430"
              stroke="white"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeOpacity="0.6"
            />

            {/* White Star Outlines on Lime Wave */}
            <path
              d="M 220 340 L 225 352 L 238 354 L 228 363 L 231 376 L 220 370 L 209 376 L 212 363 L 202 354 L 215 352 Z"
              stroke="white"
              strokeWidth="2"
              strokeOpacity="0.5"
              fill="none"
            />
            <path
              d="M 120 460 L 123 468 L 132 469 L 125 475 L 127 484 L 120 480 L 113 484 L 115 475 L 108 469 L 117 468 Z"
              stroke="white"
              strokeWidth="2"
              strokeOpacity="0.5"
              fill="none"
            />

            <defs>
              <linearGradient id="photoGalleryLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A3E635" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#84CC16" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#65A30D" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 2. Paper Airplane Flying Arc (Top Right) */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-[12%] text-lime-600 opacity-80 hidden md:block z-10"
        >
          <div className="flex items-center gap-2">
            <svg width="140" height="40" viewBox="0 0 140 40" fill="none">
              <path d="M 10 30 Q 70 5, 130 15" stroke="#84CC16" strokeWidth="2" strokeDasharray="6 6" />
            </svg>
            <div className="w-8 h-8 text-[#84CC16] transform -rotate-12">
              <Send className="w-full h-full" />
            </div>
          </div>
        </motion.div>

        {/* 3. Floating Geometric Ring & Circle Outlines */}
        {/* Top Center Lime Ring */}
        <div className="absolute top-14 left-[40%] w-7 h-7 rounded-full border-4 border-[#84CC16] opacity-70" />
        {/* Top Right Purple Ring */}
        <div className="absolute top-24 right-[6%] w-9 h-9 rounded-full border-4 border-purple-400 opacity-60" />
        {/* Mid Right Yellow Ring */}
        <div className="absolute top-[48%] right-[8%] w-10 h-10 rounded-full border-4 border-amber-400 opacity-60" />
        {/* Bottom Right Purple Ring */}
        <div className="absolute bottom-28 right-[18%] w-7 h-7 rounded-full border-4 border-purple-400 opacity-50" />

        {/* 4. Top-Left Lime Dot Matrix & Top-Right Green Dot Matrix */}
        <div className="absolute top-8 left-8 opacity-30 flex flex-col gap-2 z-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-2">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute top-8 right-8 opacity-30 flex flex-col gap-2 z-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-2">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute bottom-10 right-8 opacity-25 flex flex-col gap-2 z-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-2">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              ))}
            </div>
          ))}
        </div>

        {/* 5. Bottom Right Striped Circle Texture (Matching Image) */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full border-8 border-slate-200/50 bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,#e2e8f0_6px,#e2e8f0_12px)] opacity-40 z-0" />

        {/* Ambient Color Glow Blobs */}
        <div className="absolute bottom-10 -right-32 w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ─── HEADER SECTION WITH DOODLES & UNDERLINE ───────────────── */}
        <div className="relative text-center space-y-4 max-w-3xl mx-auto">
          
          {/* Top Left Paper Airplane Doodle */}
          <motion.div
            animate={{ y: [-4, 6, -4], rotate: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 left-2 sm:-left-12 opacity-80 text-indigo-400 hidden sm:block"
          >
            <div className="flex items-center gap-1">
              <span className="text-xs border-t-2 border-dashed border-indigo-300 w-8 inline-block" />
              <Send className="w-6 h-6 transform -rotate-12" />
            </div>
          </motion.div>

          {/* Top Right Star & Flower Doodles */}
          <div className="absolute -top-4 right-0 sm:-right-8 flex items-center gap-3 text-2xl pointer-events-none hidden sm:flex">
            <span className="animate-bounce">⭐</span>
            <span className="animate-pulse">🌸</span>
          </div>

          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] shadow-sm">
            <Sprout className="w-4 h-4 text-[#059669]" />
            <span className="text-xs font-black tracking-wider uppercase">
              OUR LEARNING MOMENTS
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
            Explore. Learn. Grow{' '}
            <span className="relative inline-block text-[#6366F1]">
              Together.
              {/* Yellow Brush Underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-amber-400 pointer-events-none"
                viewBox="0 0 120 18"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 3 14 C 35 4, 85 4, 117 14"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Real moments from our live interactive classes, phonics games, math puzzle quests, and joyful student achievements.
          </p>
        </div>

        {/* ─── CATEGORY FILTER TABS ───────────────────────────────────── */}
        <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-lg shadow-indigo-200 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:border-indigo-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ─── PHOTO GALLERY GRID (MATCHING USER REFERENCE MOCKUP) ────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
          >

            {/* ─── CARD 1: TALL FEATURED HERO CARD (LEFT, SPANS 2 ROWS) ───── */}
            {(showAll || activeTab === 'Phonics') && (
              <motion.div
                whileHover={{ y: -6 }}
                className="lg:col-span-4 lg:row-span-2 group relative rounded-[32px] overflow-hidden bg-slate-900 shadow-xl border border-slate-100 flex flex-col justify-between min-h-[460px] lg:min-h-[560px]"
              >
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000"
                  alt="Phonics & Early Reading Superstar"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="relative z-20 p-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#6366F1] text-white text-xs font-black shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Featured
                  </span>
                </div>

                {/* Bottom Dark Gradient Overlay with Text */}
                <div className="relative z-20 p-6 sm:p-8 bg-gradient-to-t from-[#1E1B4B] via-[#2E1065]/90 to-transparent pt-24 text-white flex flex-col justify-end">
                  <h3 className="text-xl sm:text-2xl font-black leading-tight text-white drop-shadow">
                    Phonics &amp; Early Reading Superstar
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2 leading-relaxed opacity-95">
                    Building sound-letter associations, fluency, and reading joy.
                  </p>

                  <div className="mt-5">
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1E1B4B] font-bold text-xs sm:text-sm shadow-xl hover:bg-slate-100 transition group-hover:gap-3 cursor-pointer">
                      <span>View Moments</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Subtle Decorative ABC Doodles in Card Corner */}
                <div className="absolute bottom-6 right-6 z-10 opacity-20 text-white font-black text-3xl pointer-events-none select-none">
                  ABC 📖
                </div>
              </motion.div>
            )}

            {/* ─── CARD 2: LIVE ZOOM SESSION (MIDDLE TOP) ───────────────── */}
            {(showAll || activeTab === 'Live Zoom') && (
              <motion.div
                whileHover={{ y: -6 }}
                className="lg:col-span-4 group relative rounded-[32px] overflow-hidden bg-slate-900 shadow-xl border border-slate-100 h-[260px] flex flex-col justify-between"
              >
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
                  alt="Live 1-on-1 Zoom Session"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="relative z-20 p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold shadow-md">
                    <Video className="w-3.5 h-3.5 text-[#059669]" />
                    Live Zoom
                  </span>
                </div>

                {/* Bottom Curved Wave Banner Overlay (Green) */}
                <div className="relative z-20 mt-auto">
                  <div className="relative bg-gradient-to-r from-[#059669] to-[#10B981] p-4 sm:p-5 text-white flex items-center justify-between gap-3">
                    {/* SVG Top Organic Wave */}
                    <svg
                      className="absolute top-0 inset-x-0 -translate-y-[98%] w-full h-6 text-[#059669] pointer-events-none"
                      viewBox="0 0 400 32"
                      preserveAspectRatio="none"
                      fill="currentColor"
                    >
                      <path d="M 0 18 C 100 2, 260 34, 400 12 L 400 32 L 0 32 Z" />
                    </svg>

                    <div>
                      <h4 className="text-sm sm:text-base font-black leading-snug">
                        Live 1-on-1 Zoom Session
                      </h4>
                      <p className="text-[11px] sm:text-xs text-emerald-100 font-medium mt-0.5">
                        Personalized attention with certified educators.
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white text-[#059669] flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── CARD 3: MATH & LOGIC PUZZLE QUEST (RIGHT TOP) ─────────── */}
            {(showAll || activeTab === 'Math & Logic') && (
              <motion.div
                whileHover={{ y: -6 }}
                className="lg:col-span-4 group relative rounded-[32px] overflow-hidden bg-slate-900 shadow-xl border border-slate-100 h-[260px] flex flex-col justify-between"
              >
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
                  alt="Math & Logic Puzzle Quest"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="relative z-20 p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold shadow-md">
                    <Calculator className="w-3.5 h-3.5 text-[#E11D48]" />
                    Math &amp; Logic
                  </span>
                </div>

                {/* Bottom Curved Wave Banner Overlay (Rose/Pink) */}
                <div className="relative z-20 mt-auto">
                  <div className="relative bg-gradient-to-r from-[#BE123C] to-[#E11D48] p-4 sm:p-5 text-white flex items-center justify-between gap-3">
                    {/* SVG Top Organic Wave */}
                    <svg
                      className="absolute top-0 inset-x-0 -translate-y-[98%] w-full h-6 text-[#BE123C] pointer-events-none"
                      viewBox="0 0 400 32"
                      preserveAspectRatio="none"
                      fill="currentColor"
                    >
                      <path d="M 0 16 C 120 0, 240 32, 400 14 L 400 32 L 0 32 Z" />
                    </svg>

                    <div>
                      <h4 className="text-sm sm:text-base font-black leading-snug">
                        Math &amp; Logic Puzzle Quest
                      </h4>
                      <p className="text-[11px] sm:text-xs text-rose-100 font-medium mt-0.5">
                        Hands-on problem solving through playful games.
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white text-[#BE123C] flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── CARD 4: HINDI STORYTELLING & GRAMMAR (MIDDLE BOTTOM) ──── */}
            {(showAll || activeTab === 'Hindi Story') && (
              <motion.div
                whileHover={{ y: -6 }}
                className="lg:col-span-4 group relative rounded-[32px] overflow-hidden bg-slate-900 shadow-xl border border-slate-100 h-[260px] flex flex-col justify-between"
              >
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800"
                  alt="Hindi Storytelling & Grammar"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="relative z-20 p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold shadow-md">
                    <BookMarked className="w-3.5 h-3.5 text-[#D97706]" />
                    Hindi Story
                  </span>
                </div>

                {/* Bottom Curved Wave Banner Overlay (Amber/Orange) */}
                <div className="relative z-20 mt-auto">
                  <div className="relative bg-gradient-to-r from-[#D97706] to-[#F59E0B] p-4 sm:p-5 text-white flex items-center justify-between gap-3">
                    {/* SVG Top Organic Wave */}
                    <svg
                      className="absolute top-0 inset-x-0 -translate-y-[98%] w-full h-6 text-[#D97706] pointer-events-none"
                      viewBox="0 0 400 32"
                      preserveAspectRatio="none"
                      fill="currentColor"
                    >
                      <path d="M 0 14 C 140 30, 280 2, 400 18 L 400 32 L 0 32 Z" />
                    </svg>

                    <div>
                      <h4 className="text-sm sm:text-base font-black leading-snug">
                        Hindi Storytelling &amp; Grammar
                      </h4>
                      <p className="text-[11px] sm:text-xs text-amber-100 font-medium mt-0.5">
                        Learning Swar &amp; Vyanjan with illustrated tales.
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white text-[#D97706] flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── CARD 5: GROUP LEARNING & PEER ACTIVITIES (RIGHT BOTTOM) ─ */}
            {(showAll || activeTab === 'Group Fun') && (
              <motion.div
                whileHover={{ y: -6 }}
                className="lg:col-span-4 group relative rounded-[32px] overflow-hidden bg-slate-900 shadow-xl border border-slate-100 h-[260px] flex flex-col justify-between"
              >
                <img
                  src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=800"
                  alt="Group Learning & Peer Activities"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="relative z-20 p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold shadow-md">
                    <Users className="w-3.5 h-3.5 text-[#0284C7]" />
                    Group Fun
                  </span>
                </div>

                {/* Bottom Curved Wave Banner Overlay (Sky/Ocean Blue) */}
                <div className="relative z-20 mt-auto">
                  <div className="relative bg-gradient-to-r from-[#0284C7] to-[#2563EB] p-4 sm:p-5 text-white flex items-center justify-between gap-3">
                    {/* SVG Top Organic Wave */}
                    <svg
                      className="absolute top-0 inset-x-0 -translate-y-[98%] w-full h-6 text-[#0284C7] pointer-events-none"
                      viewBox="0 0 400 32"
                      preserveAspectRatio="none"
                      fill="currentColor"
                    >
                      <path d="M 0 20 C 110 4, 250 32, 400 14 L 400 32 L 0 32 Z" />
                    </svg>

                    <div>
                      <h4 className="text-sm sm:text-base font-black leading-snug">
                        Group Learning &amp; Peer Activities
                      </h4>
                      <p className="text-[11px] sm:text-xs text-sky-100 font-medium mt-0.5">
                        Collaborative challenges building confidence.
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white text-[#0284C7] flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── CARD 6: MILESTONE CELEBRATIONS (BOTTOM LEFT WIDE) ──────── */}
            {(showAll || activeTab === 'Phonics') && (
              <motion.div
                whileHover={{ y: -6 }}
                className="lg:col-span-6 group relative rounded-[32px] overflow-hidden bg-slate-900 shadow-xl border border-slate-100 h-[210px] flex flex-col justify-between"
              >
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
                  alt="Milestone & Badge Celebrations"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="relative z-20 p-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold shadow-md">
                    <Award className="w-3.5 h-3.5 text-[#0284C7]" />
                    Milestone Winner
                  </span>
                </div>

                {/* Bottom Overlay with Gold Medal Icon */}
                <div className="relative z-20 p-5 bg-gradient-to-t from-[#0F172A] via-[#1E293B]/90 to-transparent pt-12 text-white flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* Gold Medal Icon */}
                    <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                      🏅
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-black leading-tight text-white">
                        Milestone &amp; Badge Celebrations
                      </h4>
                      <p className="text-xs text-slate-300 font-medium mt-1">
                        Weekly awards, XP badges, and personalized certificates for young achievers.
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white text-[#0F172A] flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── CARD 7: FLASHCARD VOCABULARY BOOST (BOTTOM RIGHT WIDE) ─── */}
            {(showAll || activeTab === 'Hindi Story') && (
              <motion.div
                whileHover={{ y: -6 }}
                className="lg:col-span-6 group relative rounded-[32px] overflow-hidden bg-slate-900 shadow-xl border border-slate-100 h-[210px] flex flex-col justify-between"
              >
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
                  alt="Flashcard Vocabulary Boost"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="relative z-20 p-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold shadow-md">
                    <Zap className="w-3.5 h-3.5 text-[#7C3AED]" />
                    Flashcard Fun
                  </span>
                </div>

                {/* Bottom Overlay with Purple Gradient */}
                <div className="relative z-20 p-5 bg-gradient-to-t from-[#6366F1] via-[#7C3AED]/90 to-transparent pt-12 text-white flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-black leading-tight text-white">
                      Flashcard Vocabulary Boost
                    </h4>
                    <p className="text-xs text-indigo-100 font-medium mt-1">
                      Interactive audio-visual vocabulary practice.
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white text-[#6366F1] flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>
              </motion.div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default KidsPhotoGallery;
