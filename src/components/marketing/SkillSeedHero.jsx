import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, X, Users, GraduationCap, BookOpen } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const SkillSeedHero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Floating Avatars along the Golden Path (Matching Image 1)
  const avatars = [
    {
      id: 1,
      name: 'Dr. Ananya Sharma',
      role: 'Phonics Mentor',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
      borderColor: 'border-pink-400',
      shadowColor: 'shadow-pink-300/60',
      position: 'top-[4%] right-[28%] lg:right-[30%]',
    },
    {
      id: 2,
      name: 'Rohan Mehta',
      role: 'STEM Educator',
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
      borderColor: 'border-amber-400',
      shadowColor: 'shadow-amber-300/60',
      position: 'top-[18%] right-[5%] lg:right-[7%]',
    },
    {
      id: 3,
      name: 'Aria Patel',
      role: 'Reading Explorer',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
      borderColor: 'border-emerald-400',
      shadowColor: 'shadow-emerald-300/60',
      position: 'top-[40%] right-[3%] lg:right-[5%]',
    },
    {
      id: 4,
      name: 'Kabir Singh',
      role: 'Math Prodigy',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      borderColor: 'border-sky-400',
      shadowColor: 'shadow-sky-300/60',
      position: 'top-[60%] right-[10%] lg:right-[13%]',
    },
  ];

  return (
    <section className="relative w-full min-h-[92vh] bg-[#FAFBFD] overflow-hidden pt-8 lg:pt-14 pb-0 text-slate-900 font-sans">

      {/* ─── 1. MINT BACKDROP BLOB (TOP-RIGHT QUADRANT) ─────────────── */}
      <div className="absolute top-0 right-0 w-[58vw] h-[88%] pointer-events-none z-0 hidden md:block">
        <svg viewBox="0 0 700 600" fill="none" className="w-full h-full opacity-85">
          <path
            d="M 160 70 C 300 -30, 540 10, 670 110 C 790 210, 690 440, 560 530 C 430 620, 210 570, 110 450 C 10 330 30 170 160 70 Z"
            fill="url(#mintBgGrad)"
          />
          <defs>
            <linearGradient id="mintBgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#DDF4F0" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#ECFDF5" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ─── 2. SCATTERED HAND-DRAWN DOODLES & VECTOR SVGS (DESKTOP & TABLET ONLY) ──────── */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden sm:block">
        
        {/* Animated Floating Lottie SVG Doodle */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-2 left-[1%] sm:left-[3%] w-24 h-24 sm:w-36 sm:h-36 opacity-90 filter drop-shadow-lg z-20 hidden lg:block"
        >
          <DotLottieReact
            src="https://lottie.host/bcb9268c-db9e-4464-8201-d163c81e611a/niKC3IOv4Y.lottie"
            loop
            autoplay
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Rocket Pencil Doodle */}
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-8 left-[47%] w-14 h-14 opacity-85 filter drop-shadow-md hidden lg:block"
        >
          <img src="/svg/rocket-pencil-svgrepo-com.svg" alt="Rocket Pencil" className="w-full h-full object-contain" />
        </motion.div>

        {/* Open Book Doodle */}
        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-28 left-[39%] w-12 h-12 opacity-80 filter drop-shadow-md hidden lg:block"
        >
          <img src="/svg/book-opened-svgrepo-com.svg" alt="Open Book" className="w-full h-full object-contain" />
        </motion.div>

        {/* Graduation Cap Doodle */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 right-[40%] w-14 h-14 opacity-85 filter drop-shadow-md hidden lg:block"
        >
          <img src="/svg/bachelor-hat-svgrepo-com.svg" alt="Graduation Cap" className="w-full h-full object-contain" />
        </motion.div>

        {/* Globe Earth Doodle */}
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[44%] left-[35%] w-14 h-14 opacity-85 filter drop-shadow-md hidden lg:block"
        >
          <img src="/svg/earth-svgrepo-com.svg" alt="Earth Globe" className="w-full h-full object-contain" />
        </motion.div>

        {/* Chemistry Beaker Flask Doodle */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[31%] w-12 h-12 opacity-80 filter drop-shadow-md hidden lg:block"
        >
          <img src="/svg/reagent-bottle-svgrepo-com.svg" alt="Science Flask" className="w-full h-full object-contain" />
        </motion.div>

        {/* Little Flowers & Stars */}
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-6 right-[14%] w-10 h-10 opacity-80 filter drop-shadow-sm hidden md:block"
        >
          <img src="/svg/little-flower-svgrepo-com.svg" alt="Flower" className="w-full h-full object-contain" />
        </motion.div>
        <div className="absolute top-12 left-[10%] text-amber-400 text-2xl animate-bounce hidden md:block">⭐</div>

        {/* Dotted Grid Pattern Top Left */}
        <div className="absolute top-4 left-4 opacity-25 flex flex-col gap-1.5 hidden lg:flex">
          <div className="flex gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/></div>
          <div className="flex gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/></div>
          <div className="flex gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/></div>
        </div>

      </div>

      {/* ─── 3. MAIN HERO GRID LAYOUT ───────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[82vh]">

          {/* ─── LEFT COLUMN: HEADLINE, SUBTITLE & CTAS ─────────────── */}
          <div className="lg:col-span-6 space-y-7 text-left pt-2 pb-10">



            {/* Main Headline with clamp() fluid typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-black text-[#0F172A] tracking-tight leading-[1.15]"
              style={{ fontSize: 'clamp(2.1rem, 7.8vw, 4.5rem)' }}
            >
              Discover{' '}
              <span className="relative inline-block text-[#4F46E5]">
                Skills.
                {/* Yellow Hand-Drawn Brush Stroke Underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3.5 text-amber-400 pointer-events-none"
                  viewBox="0 0 120 18"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 3 14 C 35 4, 85 4, 117 14"
                    stroke="currentColor"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              Shape <span className="text-[#16A34A]">Future.</span>
              <br />
              Inspire <span className="text-[#F97316]">Tomorrow.</span>
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg max-w-[92%] sm:max-w-lg leading-relaxed"
            >
              A creative learning space for curious minds. Explore courses, connect with mentors, and build the future you dream of.
            </motion.p>

            {/* CTA Buttons (Stacked on small mobile, horizontal on sm+) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 pt-2"
            >
              {/* Primary CTA: Start Your Journey */}
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 bg-[#5B63F6] hover:bg-[#4B52E3] text-white font-bold text-sm sm:text-base rounded-full shadow-xl shadow-indigo-200 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 min-h-[44px]"
              >
                <span>Start Your Journey</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>

              {/* Secondary CTA: Watch Video */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center justify-center sm:justify-start gap-3.5 group cursor-pointer min-h-[44px] py-1"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-indigo-50 group-hover:bg-indigo-100 text-[#5B63F6] flex items-center justify-center border border-indigo-100 shadow-sm transition-transform duration-200 group-hover:scale-110 flex-shrink-0">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-sm font-bold text-[#0F172A] group-hover:text-[#5B63F6] transition-colors">
                    Watch Video
                  </div>
                  <div className="text-xs text-slate-500 font-medium">See how it works</div>
                </div>
              </button>
            </motion.div>

            {/* Mobile Vector SVG Feature Badge Strip (Book, Pen, Settings, Bag) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex md:hidden items-center justify-between gap-2 pt-3 w-full"
            >
              <div className="flex flex-col items-center gap-1 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-md border border-indigo-100 flex-1 max-w-[80px]">
                <img src="/svg/book-svgrepo-com.svg" alt="Book" className="w-7 h-7 object-contain" />
                <span className="text-[10px] font-black text-slate-800">Reading</span>
              </div>

              <div className="flex flex-col items-center gap-1 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-md border border-purple-100 flex-1 max-w-[80px]">
                <img src="/svg/rocket-pencil-svgrepo-com.svg" alt="Pen Pencil" className="w-7 h-7 object-contain" />
                <span className="text-[10px] font-black text-slate-800">Writing</span>
              </div>

              <div className="flex flex-col items-center gap-1 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-md border border-amber-100 flex-1 max-w-[80px]">
                <img src="/svg/set-up-svgrepo-com.svg" alt="Settings" className="w-7 h-7 object-contain" />
                <span className="text-[10px] font-black text-slate-800">Settings</span>
              </div>

              <div className="flex flex-col items-center gap-1 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-md border border-emerald-100 flex-1 max-w-[80px]">
                <img src="/svg/bag-svgrepo-com.svg" alt="School Bag" className="w-7 h-7 object-contain" />
                <span className="text-[10px] font-black text-slate-800">Classes</span>
              </div>
            </motion.div>

            {/* Floating Stats Bar Pill (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 sm:pt-6 w-full"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-3 sm:p-5 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2 sm:gap-8">
                
                {/* Stat 1: 10K+ Active Learners */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#10B981] text-white flex items-center justify-center shadow-md shadow-emerald-200 flex-shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-xl font-black text-slate-900 leading-tight">10K+</div>
                    <div className="text-[9px] sm:text-[11px] font-semibold text-slate-500">Learners</div>
                  </div>
                </div>

                <div className="w-px h-7 sm:h-9 bg-slate-200" />

                {/* Stat 2: 500+ Expert Mentors */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#F59E0B] text-white flex items-center justify-center shadow-md shadow-amber-200 flex-shrink-0">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-xl font-black text-slate-900 leading-tight">500+</div>
                    <div className="text-[9px] sm:text-[11px] font-semibold text-slate-500">Mentors</div>
                  </div>
                </div>

                <div className="w-px h-7 sm:h-9 bg-slate-200" />

                {/* Stat 3: 100+ Courses */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#F43F5E] text-white flex items-center justify-center shadow-md shadow-rose-200 flex-shrink-0">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-xl font-black text-slate-900 leading-tight">100+</div>
                    <div className="text-[9px] sm:text-[11px] font-semibold text-slate-500">Courses</div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* ─── RIGHT COLUMN: FULL SCREEN 3D WINDING PATH CANVAS (HIDDEN ON PHONE DEVICES) ────────── */}
          <div className="hidden md:block lg:col-span-6 relative w-full h-[460px] sm:h-[600px] lg:h-[680px] mt-6 lg:mt-0">

            {/* Floating Animated Lottie Feature Card Widget (Hidden on mobile to prevent floating whitespace) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="hidden sm:flex absolute -top-3 left-[0%] lg:-left-6 z-30 bg-white/95 backdrop-blur-md rounded-3xl p-3 sm:p-3.5 shadow-xl shadow-purple-900/5 border border-purple-100/80 items-center gap-3 max-w-[210px] sm:max-w-[230px] cursor-pointer"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 bg-purple-50/80 rounded-2xl p-1 border border-purple-100 flex items-center justify-center">
                <DotLottieReact
                  src="https://lottie.host/53d5a0de-8f91-481e-884a-7a40a12986dc/Yi6Qq5vOxN.lottie"
                  loop
                  autoplay
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <span className="inline-block px-2 py-0.5 rounded-full bg-purple-100 text-[#7C3AED] text-[9px] font-black uppercase tracking-wider mb-0.5">
                  Interactive
                </span>
                <h4 className="text-xs sm:text-xs font-black text-slate-900 leading-tight">
                  Daily Quests &amp; Reading
                </h4>
              </div>
            </motion.div>

            {/* Glowing Yellow Lightbulb Idea at Top End of Path */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-2 right-[18%] sm:right-[22%] text-4xl sm:text-6xl drop-shadow-xl z-30 pointer-events-none"
            >
              💡
            </motion.div>

            {/* 3D Journey Artwork Image (Adjusted scale & position so full yellow path is visible above blue section) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-10"
            >
              <img
                src="/images/boy_journey-removebg-preview.png"
                alt="SkillSeed 3D Boy Explorer Journey"
                className="w-full h-full object-contain scale-100 sm:scale-105 lg:scale-110 transform -translate-y-4 sm:-translate-y-6 lg:-translate-y-8 filter drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Avatar Cards directly on canvas (Matching Image 1) */}
            {avatars.map((avatar, idx) => (
              <motion.div
                key={avatar.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35 + idx * 0.12, type: 'spring', stiffness: 220 }}
                whileHover={{ scale: 1.15, zIndex: 40 }}
                className={`absolute ${avatar.position} z-30 cursor-pointer group`}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-4 ${avatar.borderColor} ${avatar.shadowColor} shadow-xl overflow-hidden bg-white`}>
                  <img src={avatar.img} alt={avatar.name} className="w-full h-full object-cover" />
                </div>
                {/* Tooltip on Hover */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-2xl z-40">
                  {avatar.name}
                  <span className="block text-[9px] text-slate-300 font-normal">{avatar.role}</span>
                </div>
              </motion.div>
            ))}

            {/* Speech Callout Bubble (Positioned directly near Boy's Pedestal, adjusted above blue wave) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute bottom-[10%] sm:bottom-[12%] left-4 sm:left-[5%] bg-white/95 backdrop-blur-md rounded-3xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-2xl border border-slate-100 max-w-[190px] sm:max-w-[210px] z-30 flex items-center gap-2"
            >
              <div className="text-lg sm:text-xl flex-shrink-0">🚀</div>
              <p className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight">
                Your <span className="text-[#4F46E5]">journey</span> begins right{' '}
                <span className="relative inline-block text-rose-500">
                  here!
                  <svg className="absolute -bottom-0.5 left-0 w-full h-1.5 text-pink-400 pointer-events-none" viewBox="0 0 50 10" preserveAspectRatio="none">
                    <path d="M 0 8 Q 25 0 50 8" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </p>
            </motion.div>

            {/* Animated Floating Lottie Graphic (Bottom Right Corner - Hidden on mobile) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden sm:block absolute bottom-[10%] sm:bottom-[12%] right-[2%] sm:right-[5%] w-28 h-28 sm:w-36 sm:h-36 z-30 pointer-events-none drop-shadow-xl"
            >
              <DotLottieReact
                src="https://lottie.host/cdd17168-019b-4c46-8fda-a1fb53cbf51f/EgUQYZlEdW.lottie"
                loop
                autoplay
                className="w-full h-full object-contain"
              />
            </motion.div>

          </div>

        </div>
      </div>

      {/* ─── 4. BOTTOM RIGHT CORNER BLUE WAVE & PAINT BRUSH ──────────── */}
      <div className="relative w-full overflow-hidden z-20">
        
        {/* Playful Organic SVG Wave Top Edge (2-3 Smooth Asymmetric Curves) */}
        <div className="w-full overflow-hidden leading-none pointer-events-none -mb-1">
          <svg
            viewBox="0 0 1440 54"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-10 sm:h-14 lg:h-16 block"
          >
            <path
              d="M 0 32 C 260 8, 480 48, 760 22 C 1040 -4, 1260 42, 1440 18 L 1440 54 L 0 54 Z"
              fill="url(#bottomBlueWaveGrad)"
            />
            <defs>
              <linearGradient id="bottomBlueWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4338CA" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Blue/Purple Gradient Content Section (Preserving icons, content & spacing) */}
        <div className="w-full h-24 sm:h-32 bg-gradient-to-r from-[#4338CA] via-[#3B82F6] to-[#4F46E5] shadow-2xl flex items-center justify-between px-8 sm:px-16 relative">
          
          {/* Palette & Math Doodles inside bottom wave */}
          <div className="flex items-center gap-6 text-white/40">
            <div className="text-3xl font-cursive">1 2 3</div>
            <div className="text-2xl">🎨</div>
            <div className="text-xl">🌸</div>
          </div>

          {/* Paint Brush & Splash Graphic (Far Right) */}
          <div className="flex items-center gap-3 relative">
            <div className="w-20 h-10 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full blur-sm opacity-80 animate-pulse" />
            <div className="text-4xl transform -rotate-45">🖌️</div>
          </div>
        </div>

      </div>

      {/* ─── VIDEO MODAL ────────────────────────────────────────────── */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 p-4 rounded-3xl max-w-3xl w-full relative shadow-2xl overflow-hidden border border-slate-800"
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="SkillSeed Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default SkillSeedHero;
