import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

const CATEGORIES = ['All', 'Phonics', 'Live Zoom', 'Math & Logic', 'Hindi Story', 'Group Fun'];

const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'Phonics',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000',
    title: 'Phonics & Early Reading Superstar',
    badge: '📖 Phonics Mastery',
    desc: 'Building sound-letter associations, fluency, and reading joy.',
    span: 'col-span-1 md:col-span-2 md:row-span-2 h-[340px] md:h-full',
  },
  {
    id: 2,
    category: 'Live Zoom',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    title: 'Live 1-on-1 Zoom Session',
    badge: '🎥 Live Zoom',
    desc: 'Personalized attention with certified educators.',
    span: 'col-span-1 md:col-span-1 md:row-span-1 h-[240px]',
  },
  {
    id: 3,
    category: 'Math & Logic',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    title: 'Math & Logic Puzzle Quest',
    badge: '🔢 Math & Logic',
    desc: 'Hands-on problem solving through playful games.',
    span: 'col-span-1 md:col-span-1 md:row-span-1 h-[240px]',
  },
  {
    id: 4,
    category: 'Hindi Story',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    title: 'Hindi Storytelling & Grammar',
    badge: '🇮🇳 Hindi Story',
    desc: 'Learning Swar & Vyanjan with illustrated tales.',
    span: 'col-span-1 md:col-span-1 md:row-span-1 h-[240px]',
  },
  {
    id: 5,
    category: 'Group Fun',
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=800',
    title: 'Group Learning & Peer Activities',
    badge: '🎮 Group Fun',
    desc: 'Collaborative challenges building confidence.',
    span: 'col-span-1 md:col-span-1 md:row-span-1 h-[240px]',
  },
  {
    id: 6,
    category: 'Phonics',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=1000',
    title: 'Milestone & Badge Celebrations',
    badge: '⭐ Milestone Winner',
    desc: 'Weekly awards, XP badges, and personalized certificates for young achievers.',
    span: 'col-span-1 md:col-span-2 md:row-span-1 h-[240px]',
  },
  {
    id: 7,
    category: 'Hindi Story',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
    title: 'Flashcard Vocabulary Boost',
    badge: '💡 Flashcard Fun',
    desc: 'Interactive audio-visual vocabulary practice.',
    span: 'col-span-1 md:col-span-2 md:row-span-1 h-[240px]',
  },
];

export const KidsPhotoGallery = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = activeTab === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAF5F8] via-white to-[#FAF5F8] relative overflow-hidden border-b border-pink-100/60">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-200/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-32 w-96 h-96 bg-pink-200/30 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-[#C04DF7] text-xs font-black uppercase tracking-wider shadow-sm">
            <Camera className="w-3.5 h-3.5" />
            <span>Kids Photo Gallery Grid Album</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Life at Learn2Read Academy
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed">
            Real moments from our live interactive classes, phonics games, math puzzle quests, and joyful student achievements.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-2xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-none text-xs font-black transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#C04DF7] text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'bg-white text-slate-600 hover:bg-purple-50 border border-slate-200/80 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Photo Album Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className={`group relative rounded-none overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all cursor-pointer ${item.span}`}
              >
                {/* Photo Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
                />

                {/* Permanent Category Badge (Top-Left) */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-none text-[11px] font-black text-slate-900 shadow-md border border-white/70 inline-block">
                    {item.badge}
                  </span>
                </div>

                {/* Gradient & Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                    <h3 className="text-base sm:text-lg font-black leading-snug text-white drop-shadow">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 font-semibold leading-relaxed drop-shadow-sm opacity-90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
