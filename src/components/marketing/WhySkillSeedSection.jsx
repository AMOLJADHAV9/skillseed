import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  ArrowRight,
  Send,
  Video,
  BookOpen,
  Calculator,
  BarChart3,
  Gamepad2,
  Sparkles,
  Star
} from 'lucide-react';

export const WhySkillSeedSection = () => {
  const avatars = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120',
  ];

  const features = [
    {
      id: 'live-classes',
      title: 'Live 1-on-1 Classes',
      dashColor: 'bg-[#A855F7]',
      desc: 'Interactive live sessions on Zoom with personalized attention and max 4:1 student-teacher ratio.',
      iconBg: 'bg-[#F3E8FF]',
      buttonColor: 'bg-[#F3E8FF] text-[#A855F7] group-hover:bg-[#A855F7] group-hover:text-white',
      dotColor: 'bg-purple-200',
      customIcon: (
        <div className="w-12 h-12 rounded-2xl bg-[#F3E8FF] border border-purple-200 flex items-center justify-center p-2.5 shadow-sm">
          <img src="/svg/video-svgrepo-com.svg" alt="Live Zoom" className="w-full h-full object-contain" />
        </div>
      ),
    },
    {
      id: 'phonics-reading',
      title: 'Phonics & Reading',
      dashColor: 'bg-[#D97706]',
      desc: 'Comprehensive phonics curriculum from alphabet sounds to advanced spelling rules and reading fluency.',
      iconBg: 'bg-[#FEF3C7]',
      buttonColor: 'bg-[#FEF3C7] text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white',
      dotColor: 'bg-amber-200',
      customIcon: (
        <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] border border-amber-200 flex items-center justify-center p-2 shadow-sm">
          <img src="/svg/book-opened-svgrepo-com.svg" alt="Phonics & Reading" className="w-full h-full object-contain" />
        </div>
      ),
    },
    {
      id: 'hindi-language',
      title: 'Hindi Language',
      dashColor: 'bg-[#16A34A]',
      desc: 'Learn Swar, Vyanjan, Matra and Hindi grammar through engaging stories and interactive games.',
      iconBg: 'bg-[#DCFCE7]',
      buttonColor: 'bg-[#DCFCE7] text-[#16A34A] group-hover:bg-[#16A34A] group-hover:text-white',
      dotColor: 'bg-emerald-200',
      customIcon: (
        <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] border border-emerald-200 flex items-center justify-center p-2 shadow-sm">
          <img src="/svg/earth-svgrepo-com.svg" alt="Hindi Language" className="w-full h-full object-contain" />
        </div>
      ),
    },
    {
      id: 'math-logic',
      title: 'Math & Logic',
      dashColor: 'bg-[#E11D48]',
      desc: 'Build strong numeracy and problem-solving skills with our playful, puzzle-based math curriculum.',
      iconBg: 'bg-[#FFE4E6]',
      buttonColor: 'bg-[#FFE4E6] text-[#E11D48] group-hover:bg-[#E11D48] group-hover:text-white',
      dotColor: 'bg-rose-200',
      customIcon: (
        <div className="w-12 h-12 rounded-2xl bg-[#FFE4E6] border border-rose-200 flex items-center justify-center p-2.5 shadow-sm">
          <img src="/svg/genetic-algorithm-svgrepo-com.svg" alt="Math & Logic" className="w-full h-full object-contain" />
        </div>
      ),
    },
    {
      id: 'gamified-learning',
      title: 'Gamified Learning',
      isFavorite: true,
      dashColor: 'bg-[#0284C7]',
      desc: 'Kids earn badges, XP points and unlock rewards that make every lesson exciting and motivating.',
      iconBg: 'bg-[#E0F2FE]',
      buttonColor: 'bg-[#E0F2FE] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white',
      dotColor: 'bg-sky-200',
      customIcon: (
        <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] border border-sky-200 flex items-center justify-center p-2.5 shadow-sm">
          <img src="/svg/gamepad-svgrepo-com.svg" alt="Gamified Learning" className="w-full h-full object-contain" />
        </div>
      ),
    },
    {
      id: 'progress-tracking',
      title: 'Progress Tracking',
      dashColor: 'bg-[#8B5CF6]',
      desc: 'Detailed parent dashboards with weekly progress reports, milestones and teacher feedback.',
      iconBg: 'bg-[#F3E8FF]',
      buttonColor: 'bg-[#F3E8FF] text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white',
      dotColor: 'bg-purple-200',
      customIcon: (
        <div className="w-12 h-12 rounded-2xl bg-[#F3E8FF] border border-purple-200 flex items-center justify-center p-2.5 shadow-sm">
          <img src="/svg/efficiency-svgrepo-com.svg" alt="Progress Tracking" className="w-full h-full object-contain" />
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF9FF] relative overflow-hidden text-slate-900 font-sans">
      
      {/* Background Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-200/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-pink-200/40 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ─── 1. TOP FLOATING SOCIAL PROOF PILL BANNER ──────────────── */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3.5 px-6 py-2.5 rounded-full bg-white shadow-xl shadow-slate-200/60 border border-slate-100 text-xs sm:text-sm font-bold text-slate-800 relative"
          >
            <Heart className="w-4 h-4 text-[#A855F7] fill-[#A855F7]/20" />
            
            <span>
              Trusted by <span className="text-[#A855F7] font-black">4,000+</span> Happy Families
            </span>

            {/* Overlapping Avatar Face Circles */}
            <div className="flex items-center ml-1">
              {avatars.map((img, idx) => (
                <div
                  key={idx}
                  className="w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm -ml-2 first:ml-0"
                >
                  <img src={img} alt="Happy parent" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-[#F3E8FF] text-[#A855F7] font-black text-[11px] flex items-center justify-center -ml-2 border-2 border-white shadow-sm">
                +4K
              </div>
            </div>

            {/* Sparkle dashes doodle top right */}
            <span className="absolute -top-2 -right-2 text-purple-400 text-xs font-black">✨</span>
          </motion.div>
        </div>

        {/* ─── 2. MAIN SECTION HEADER WITH DOODLES & UNDERLINE ────────── */}
        <div className="relative text-center space-y-3 max-w-3xl mx-auto">
          
          {/* Top Left Paper Airplane Doodle */}
          <motion.div
            animate={{ y: [-4, 6, -4], rotate: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 left-0 sm:-left-10 opacity-80 text-indigo-400 hidden sm:block pointer-events-none"
          >
            <div className="flex items-center gap-1">
              <span className="text-xs border-t-2 border-dashed border-indigo-300 w-8 inline-block" />
              <Send className="w-6 h-6 transform -rotate-12" />
            </div>
          </motion.div>

          {/* Doodles & Emojis */}
          <div className="absolute top-10 -left-6 text-rose-400 text-xl pointer-events-none hidden sm:block">
            ⭐
          </div>
          <div className="absolute -top-2 right-4 sm:-right-8 flex items-center gap-2 text-2xl pointer-events-none hidden sm:flex">
            <span className="text-amber-400">⭐</span>
          </div>
          <div className="absolute top-14 right-2 text-sky-400 text-3xl pointer-events-none hidden sm:block">
            📖
          </div>

          {/* Subtag */}
          <span className="text-xs font-black text-[#A855F7] uppercase tracking-widest block">
            WHY SKILLSEED
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
            Everything Your Child Needs to
            <br />
            <span className="text-[#A855F7]">Learn, </span>
            <span className="text-[#22C55E]">Grow </span>
            <span className="text-[#0F172A]">&amp; </span>
            <span className="relative inline-block text-[#F97316]">
              Shine.
              {/* Yellow Hand-Drawn Brush Underline */}
              <svg
                className="absolute -bottom-1 left-0 w-full h-3 text-amber-400 pointer-events-none"
                viewBox="0 0 100 18"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 3 14 C 30 4, 70 4, 97 14"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed pt-1">
            A holistic, research-backed curriculum designed to build reading, language, and numeracy skills with joy.
          </p>
        </div>

        {/* ─── 3. FEATURE CARDS GRID (6 CARDS IN 2 ROWS) ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-[32px] p-6 sm:p-7 border border-slate-100 shadow-xl shadow-slate-100/80 overflow-hidden flex flex-col justify-between transition-all cursor-pointer min-h-[200px]"
            >
              {/* Top Ribbon Badge for Students' Favorite */}
              {f.isFavorite && (
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-[10px] uppercase tracking-wider px-4 py-1 rounded-b-xl shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    STUDENTS' FAVORITE
                  </span>
                </div>
              )}

              {/* Main Content: Icon Box & Text */}
              <div className="flex items-start gap-5 relative z-10 pt-2">
                {/* Left Icon Squircle Box */}
                <div className={`w-20 h-20 rounded-[24px] ${f.iconBg} flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>
                  {f.customIcon}
                </div>

                {/* Right Text Content */}
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-black text-[#0F172A] leading-snug">
                    {f.title}
                  </h3>
                  {/* Colored Horizontal Accent Dash */}
                  <div className={`w-7 h-1 rounded-full ${f.dashColor}`} />
                  
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pt-1">
                    {f.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Dotted Corner Pattern & Arrow Circle */}
              <div className="flex items-center justify-between mt-4 pt-2 relative z-10">
                {/* Dotted Grid Pattern in Bottom Left */}
                <div className="flex gap-1 opacity-40">
                  <div className={`w-1.5 h-1.5 rounded-full ${f.dotColor}`} />
                  <div className={`w-1.5 h-1.5 rounded-full ${f.dotColor}`} />
                  <div className={`w-1.5 h-1.5 rounded-full ${f.dotColor}`} />
                  <div className={`w-1.5 h-1.5 rounded-full ${f.dotColor}`} />
                </div>

                {/* Arrow Circle Button */}
                <div className={`w-8 h-8 rounded-full ${f.buttonColor} flex items-center justify-center font-bold text-sm shadow-sm transition-all group-hover:scale-110 ml-auto`}>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhySkillSeedSection;
