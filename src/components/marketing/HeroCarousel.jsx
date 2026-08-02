import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000',
    alt: 'Young student reading happily',
    tag: 'Phonics & Reading Superstar',
    subtitle: 'Building alphabet fluency & pronunciation',
    badgeColor: 'bg-[#C04DF7]',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=1000',
    alt: 'Child wearing headphones learning on laptop',
    tag: 'Live 1-on-1 Zoom Class',
    subtitle: 'Max 4:1 small batch interactive sessions',
    badgeColor: 'bg-[#22C55E]',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000',
    alt: 'Child solving math puzzle blocks',
    tag: 'Math & Logic Quest',
    subtitle: 'Numeracy & problem-solving adventures',
    badgeColor: 'bg-[#F59E0B]',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000',
    alt: 'Child reading story flashcards',
    tag: 'Hindi Language & Grammar',
    subtitle: 'Swar, Vyanjan & interactive storytelling',
    badgeColor: 'bg-[#E84393]',
  },
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <div className="relative w-full flex justify-center">
      
      {/* Crisp 1:1 Square Carousel Container (Zero Border Radius) */}
      <div id="heroCarousel" className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] lg:w-[450px] lg:h-[450px] aspect-square rounded-none overflow-hidden bg-slate-900 shadow-2xl border-4 border-white group">
        
        {/* Animated Image Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.alt}
              className="w-full h-full object-cover select-none rounded-none"
            />
            {/* Gradient Overlay for Text Clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Slide Title & Subtitle Caption */}
        <div className="absolute bottom-12 inset-x-6 z-20 text-white text-center pointer-events-none">
          <motion.div
            key={currentSlide.id + '-caption'}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-1.5"
          >
            <span className={`inline-block px-4 py-1.5 ${currentSlide.badgeColor} text-white text-xs font-black uppercase tracking-wider rounded-none shadow-lg`}>
              ✨ {currentSlide.tag}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-200 drop-shadow-md">
              {currentSlide.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Square Prev Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-none bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md border border-white/40 flex items-center justify-center transition-all cursor-pointer shadow-xl opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Square Next Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-none bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md border border-white/40 flex items-center justify-center transition-all cursor-pointer shadow-xl opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Square Indicators Bar */}
        <ol className="absolute bottom-4 inset-x-0 z-30 flex justify-center gap-2.5 m-0 p-0 list-none">
          {SLIDES.map((slide, idx) => (
            <li
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-none transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'w-9 bg-white shadow-md' : 'w-3 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </ol>
      </div>

      {/* Floating Square ABC Blocks */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-5 -left-5 flex items-end gap-2 z-30"
      >
        {[{ l: 'a', bg: '#E84393' }, { l: 'b', bg: '#00CEC9' }, { l: 'c', bg: '#FF7675' }].map(({ l, bg }) => (
          <div
            key={l}
            style={{ backgroundColor: bg }}
            className="w-12 h-12 rounded-none text-white font-black text-2xl flex items-center justify-center shadow-xl border-2 border-white cursor-pointer"
          >
            {l}
          </div>
        ))}
      </motion.div>

      {/* Floating Emojis */}
      <motion.div
        animate={{ y: [4, -12, 4], rotate: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-6 top-1/3 text-4xl z-30 pointer-events-none"
      >
        🚀
      </motion.div>
      <div className="absolute -top-6 left-12 text-3xl text-amber-400 animate-pulse z-30 pointer-events-none">⭐</div>

      {/* Floating Square Badge Card: 98% Satisfaction */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute -top-5 right-4 bg-white/95 backdrop-blur-md rounded-none px-4 py-2.5 flex items-center gap-2.5 z-30 shadow-xl border border-white/80"
      >
        <span className="text-2xl">😊</span>
        <div>
          <div className="text-base font-black text-slate-900">98%</div>
          <div className="text-[9px] text-slate-500 font-bold">Parent Satisfaction</div>
        </div>
      </motion.div>

      {/* Floating Square Badge Card: Live Sessions */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md rounded-none px-4 py-2.5 flex items-center gap-2.5 z-30 shadow-xl border border-white/80"
      >
        <div className="w-9 h-9 rounded-none bg-purple-100 flex items-center justify-center text-lg relative">
          🎥
          <span className="w-2.5 h-2.5 rounded-none bg-emerald-500 absolute -top-1 -right-1 border-2 border-white animate-ping" />
        </div>
        <div>
          <div className="text-xs font-black text-slate-900">Live Zoom Batches</div>
          <div className="text-[9px] text-emerald-600 font-extrabold">Active Daily Sessions</div>
        </div>
      </motion.div>

    </div>
  );
};
