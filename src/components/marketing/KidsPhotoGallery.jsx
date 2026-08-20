import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sprout,
  ArrowRight,
  BookOpen,
  Video,
  Calculator,
  BookMarked,
  Users,
  ChevronLeft,
  ChevronRight,
  Star,
  Puzzle,
  Sparkles,
  Grid
} from 'lucide-react';

const CATEGORIES = [
  { id: 'All', label: 'All', icon: Grid },
  { id: 'Phonics', label: 'Phonics', icon: BookOpen },
  { id: 'Live Zoom', label: 'Live Zoom', icon: Video },
  { id: 'Math & Logic', label: 'Math & Logic', icon: Calculator },
  { id: 'Mind Story', label: 'Mind Story', icon: BookMarked },
  { id: 'Group Fun', label: 'Group Fun', icon: Users },
];

const FEATURE_CARDS = [
  {
    id: 'live-classes',
    category: 'Live Zoom',
    title: 'Live Interactive Classes',
    description: 'Join real-time classes with expert teachers and interactive activities.',
    buttonText: 'Join a Class',
    buttonLink: '/courses',
    bgClass: 'bg-[#F3E8FF] border-[#E9D5FF]',
    iconBg: 'bg-white/80 border border-purple-200',
    buttonClass: 'text-[#7E22CE] hover:bg-[#9333EA] hover:text-white',
    svgSrc: '/svg/monitor-camera-svgrepo-com.svg',
  },
  {
    id: 'learning-games',
    category: 'Phonics',
    title: 'Learning Games',
    description: 'Fun games to improve phonics, math, and critical thinking.',
    buttonText: 'Play Now',
    buttonLink: '/games',
    bgClass: 'bg-[#DCFCE7] border-[#A7F3D0]',
    iconBg: 'bg-white/80 border border-emerald-200',
    buttonClass: 'text-[#15803D] hover:bg-[#16A34A] hover:text-white',
    svgSrc: '/svg/gamepad-svgrepo-com.svg',
  },
  {
    id: 'achievements',
    category: 'Mind Story',
    title: 'Achievements',
    description: 'Celebrate milestones and track your learning progress.',
    buttonText: 'View Achievements',
    buttonLink: '/dashboard',
    bgClass: 'bg-[#FEF9C3] border-[#FDE68A]',
    iconBg: 'bg-white/80 border border-amber-200',
    buttonClass: 'text-[#A16207] hover:bg-[#CA8A04] hover:text-white',
    svgSrc: '/svg/trophy-cup-svgrepo-com.svg',
  },
  {
    id: 'progress-tracker',
    category: 'Math & Logic',
    title: 'Progress Tracker',
    description: "See how you're growing with detailed reports and insights.",
    buttonText: 'Track Progress',
    buttonLink: '/progress',
    bgClass: 'bg-[#E0F2FE] border-[#BAE6FD]',
    iconBg: 'bg-white/80 border border-sky-200',
    buttonClass: 'text-[#0369A1] hover:bg-[#0284C7] hover:text-white',
    svgSrc: '/svg/growth-svgrepo-com.svg',
  },
  {
    id: 'for-parents',
    category: 'Group Fun',
    title: 'For Parents',
    description: "Monitor your child's learning and stay connected.",
    buttonText: 'Parent Dashboard',
    buttonLink: '/parent-dashboard',
    bgClass: 'bg-[#FFE4E6] border-[#FECDD3]',
    iconBg: 'bg-white/80 border border-rose-200',
    buttonClass: 'text-[#BE123C] hover:bg-[#E11D48] hover:text-white',
    svgSrc: '/svg/avatar-thinking-svgrepo-com.svg',
  },
];

const WHATS_NEW = [
  {
    id: 'new-courses',
    badge: 'NEW',
    svgSrc: '/svg/laptop-with-a-graduation-cap-svgrepo-com.svg',
    iconBg: 'bg-amber-50 border border-amber-200',
    title: 'New Courses Added',
    desc: 'Explore exciting new courses for all age groups.',
  },
  {
    id: 'ai-assistant',
    svgSrc: '/svg/rocket-pencil-svgrepo-com.svg',
    iconBg: 'bg-rose-50 border border-rose-200',
    title: 'AI Learning Assistant',
    desc: 'Get instant help and personalized support.',
  },
  {
    id: 'safe-secure',
    svgSrc: '/svg/money-back-business-warranty-satisfaction-marketing-guaranted-svgrepo-com.svg',
    iconBg: 'bg-blue-50 border border-blue-200',
    title: 'Safe & Secure',
    desc: "Your child's data and privacy are our priority.",
  },
  {
    id: 'rewards-badges',
    svgSrc: '/svg/trophy-cup-svgrepo-com (1).svg',
    iconBg: 'bg-orange-50 border border-orange-200',
    title: 'Rewards & Badges',
    desc: 'Earn badges and rewards as you learn and grow.',
  },
];

const LITTLE_LEARNERS = [
  {
    id: 1,
    name: 'Anaya',
    title: 'Phonics Star',
    svgSrc: '/svg/avatar-thinking-1-svgrepo-com.svg',
    badgeColor: 'bg-amber-400 text-white',
    badgeIcon: Star,
  },
  {
    id: 2,
    name: 'Vihaan',
    title: 'Math Wizard',
    svgSrc: '/svg/avatar-thinking-6-svgrepo-com.svg',
    badgeColor: 'bg-purple-500 text-white',
    badgeIcon: Puzzle,
  },
  {
    id: 3,
    name: 'Myra',
    title: 'Story Explorer',
    svgSrc: '/svg/avatar-thinking-8-svgrepo-com.svg',
    badgeColor: 'bg-emerald-500 text-white',
    badgeIcon: BookOpen,
  },
  {
    id: 4,
    name: 'Aarav',
    title: 'Logic Master',
    svgSrc: '/svg/autumn-of-study-male-student-svgrepo-com.svg',
    badgeColor: 'bg-orange-500 text-white',
    badgeIcon: Sparkles,
  },
  {
    id: 5,
    name: 'Siya',
    title: 'Group Champion',
    svgSrc: '/svg/woman-taking-online-classes-svgrepo-com.svg',
    badgeColor: 'bg-pink-500 text-white',
    badgeIcon: Users,
  },
  {
    id: 6,
    name: 'Kabir',
    title: 'Reading Hero',
    svgSrc: '/svg/avatar-thinking-svgrepo-com.svg',
    badgeColor: 'bg-blue-500 text-white',
    badgeIcon: Star,
  },
];

export const KidsPhotoGallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [learnerOffset, setLearnerOffset] = useState(0);

  // Filter feature cards based on tab selection
  const filteredCards = activeTab === 'All'
    ? FEATURE_CARDS
    : FEATURE_CARDS.filter((card) => card.category === activeTab || activeTab === 'All');

  const handlePrevLearners = () => {
    setLearnerOffset((prev) => (prev > 0 ? prev - 1 : LITTLE_LEARNERS.length - 5));
  };

  const handleNextLearners = () => {
    setLearnerOffset((prev) => (prev < LITTLE_LEARNERS.length - 5 ? prev + 1 : 0));
  };

  const visibleLearners = LITTLE_LEARNERS.slice(learnerOffset, learnerOffset + 5);

  return (
    <section className="py-16 md:py-24 bg-[#FAFBFF] relative overflow-hidden text-slate-900 font-sans">
      
      {/* ─── BACKGROUND DECORATIVE ELEMENTS ──────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Organic Lime Blob (Left Edge) */}
        <div className="absolute -left-[18%] top-[-5%] w-[45%] h-[110%] z-0 hidden lg:block opacity-90">
          <svg viewBox="0 0 600 700" fill="none" className="w-full h-full">
            <path
              d="M -100 -50 C 200 -50, 480 80, 420 320 C 360 560, 150 680, -100 750 Z"
              fill="url(#momentsLimeGrad)"
            />
            <circle cx="80" cy="500" r="200" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" />
            <circle cx="80" cy="500" r="300" stroke="white" strokeWidth="2" strokeOpacity="0.15" fill="none" />
            <defs>
              <linearGradient id="momentsLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A3E635" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#84CC16" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#65A30D" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Little Flower SVG Ornament (Top Right) */}
        <div className="absolute top-8 right-[12%] w-12 h-12 opacity-60 hidden md:block">
          <img src="/svg/little-flower-svgrepo-com.svg" alt="Flower doodle" className="w-full h-full object-contain animate-spin-slow" />
        </div>

        {/* Floating Ring Ornaments */}
        <div className="absolute top-10 left-[42%] w-6 h-6 rounded-full border-4 border-[#84CC16] opacity-70" />
        <div className="absolute top-20 right-[8%] w-8 h-8 rounded-full border-4 border-purple-400 opacity-60" />
        <div className="absolute bottom-16 right-[14%] w-6 h-6 rounded-full border-4 border-indigo-400 opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ─── 1. HEADER SECTION ──────────────────────────────────────── */}
        <div className="relative text-center space-y-4 max-w-3xl mx-auto">
          
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
            <span className="text-[#6366F1]">
              Together.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Real moments from our live interactive classes, phonics games, math puzzle quests, and joyful student achievements.
          </p>
        </div>

        {/* ─── 2. CATEGORY FILTER TABS ────────────────────────────────── */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#6366F1] text-white shadow-md shadow-indigo-200 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ─── 3. 5 SOFT PASTEL FEATURE CARDS WITH PUBLIC SVGs ─────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {filteredCards.map((card) => {
              return (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -6 }}
                  className={`p-6 rounded-[28px] border shadow-sm flex flex-col justify-between items-center text-center transition-all ${card.bgClass}`}
                >
                  <div className="flex flex-col items-center space-y-4 w-full">
                    {/* SVG Container Box */}
                    <div className={`w-16 h-16 rounded-2xl ${card.iconBg} p-2.5 flex items-center justify-center shadow-sm flex-shrink-0`}>
                      <img src={card.svgSrc} alt={card.title} className="w-full h-full object-contain" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      {card.title}
                    </h3>

                    {/* Card Subtext */}
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 w-full">
                    <Link
                      to={card.buttonLink}
                      className={`inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-full bg-white font-bold text-xs shadow-sm border border-slate-100 transition-all cursor-pointer ${card.buttonClass}`}
                    >
                      <span>{card.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ─── 4. WHAT'S NEW SECTION WITH PUBLIC SVGs ─────────────────── */}
        <div className="pt-6 border-t border-slate-200/60 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
              What's <span className="text-[#6366F1]">New?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Explore our latest features and updates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHATS_NEW.map((item) => {
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-3.5 hover:shadow-md transition-shadow"
                >
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} p-2 flex items-center justify-center`}>
                      <img src={item.svgSrc} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    {item.badge && (
                      <span className="absolute -top-2 -left-2 px-1.5 py-0.5 rounded-md bg-amber-500 text-white text-[9px] font-black tracking-wider uppercase shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── 5. MEET OUR LITTLE LEARNERS CAROUSEL WITH PUBLIC SVG AVATARS ─── */}
        <div className="pt-4 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
              Meet Our <span className="text-[#6366F1]">Little Learners</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Happy faces, big dreams!
            </p>
          </div>

          {/* Avatar Slider Container */}
          <div className="relative max-w-4xl mx-auto flex items-center justify-between gap-2 px-2">
            
            {/* Left Nav Arrow */}
            <button
              onClick={handlePrevLearners}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm hover:bg-slate-50 transition cursor-pointer flex-shrink-0"
              aria-label="Previous Learners"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Avatars Row */}
            <div className="flex items-center justify-center gap-4 sm:gap-8 overflow-hidden py-2 px-1 w-full">
              <AnimatePresence mode="popLayout">
                {visibleLearners.map((learner) => {
                  const BadgeIcon = learner.badgeIcon;
                  return (
                    <motion.div
                      key={learner.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col items-center text-center space-y-2 flex-shrink-0"
                    >
                      {/* Avatar Image + Floating Badge */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1.5 bg-gradient-to-tr from-[#6366F1] to-purple-400 shadow-md bg-white">
                        <img
                          src={learner.svgSrc}
                          alt={learner.name}
                          className="w-full h-full rounded-full object-contain p-0.5"
                        />
                        {/* Mini Badge Icon Overlay */}
                        <div
                          className={`absolute bottom-0 right-0 w-6 h-6 rounded-full ${learner.badgeColor} flex items-center justify-center border-2 border-white shadow-xs`}
                        >
                          <BadgeIcon className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Learner Info */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900">
                          {learner.name}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">
                          {learner.title}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNextLearners}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm hover:bg-slate-50 transition cursor-pointer flex-shrink-0"
              aria-label="Next Learners"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ─── 6. BOTTOM CALL-TO-ACTION BANNER WITH ROCKET/GIFT SVG ──── */}
        <div className="p-6 sm:p-8 rounded-[32px] bg-[#EEF2FF] border border-indigo-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Icon + Heading + Subtitle */}
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-14 h-14 rounded-2xl bg-white border border-indigo-200 p-2.5 flex items-center justify-center flex-shrink-0 shadow-md">
              <img src="/svg/rocket-svgrepo-com.svg" alt="Gift/Rocket" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="text-base sm:text-xl font-black text-slate-900">
                Start Your Learning Journey Today!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Join thousands of happy learners and discover a world of knowledge and fun.
              </p>
            </div>
          </div>

          {/* Right Side: CTA Button */}
          <div className="flex-shrink-0">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#6366F1] hover:bg-[#4F46E5] text-white font-black text-xs sm:text-sm shadow-lg shadow-indigo-300/50 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Join Now – It's Free!</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>

          {/* Subtle Decorative Bottom Right Ring */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-4 border-indigo-300/40 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default KidsPhotoGallery;
