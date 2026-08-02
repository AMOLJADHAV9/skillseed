import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight, Play, Heart, Award } from 'lucide-react';

export const KidsIntroSection = () => {
  const checklistItems = [
    {
      title: 'Interactive Lessons',
      desc: 'Engaging gamified activities, phonics challenges & puzzle games.',
    },
    {
      title: 'Fun Activities',
      desc: 'Storytelling, creative writing, and hands-on audio-visual exercises.',
    },
    {
      title: 'Live Classes',
      desc: 'Small 4:1 student-teacher batches on Zoom for personalized attention.',
    },
    {
      title: 'Parent Dashboard',
      desc: 'Comprehensive real-time progress tracking and weekly milestone reports.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#FAF5F8]/60 to-white relative overflow-hidden border-b border-pink-100/60">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 -left-32 w-96 h-96 bg-purple-200/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-pink-200/30 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Rainbow Badge Header */}
        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-[#C04DF7] text-xs font-black uppercase tracking-wider shadow-sm"
          >
            <span>🌈</span>
            <span>Kids Intro Section</span>
            <span className="bg-purple-600 text-white text-[9px] px-2 py-0.5 rounded-full font-black ml-1">NEW</span>
          </motion.div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Kids Learning Image & Interactive Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Image Container with rounded borders */}
              <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-amber-50 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=900"
                  alt="Kids engaged in interactive learning and fun activity"
                  className="w-full h-full object-cover"
                />
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1: Activity Badge (Top-Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-purple-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl font-bold">
                  🎨
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Creative Learning</div>
                  <div className="text-[10px] text-slate-500 font-semibold">100% Interactive Activities</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Happy Student Badge (Bottom-Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-purple-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#C04DF7] flex items-center justify-center text-xl font-bold">
                  👧👦
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">10,000+ Happy Kids</div>
                  <div className="text-[10px] text-emerald-600 font-bold">⭐ 4.9/5 Parent Rating</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Slogan, Title, Checklist & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Slogan */}
            <div className="inline-flex items-center gap-2 text-sm sm:text-base font-black tracking-wider text-[#C04DF7]">
              <span>Learn</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
              <span>Play</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>Grow</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Where Learning Feels Like Play
            </h2>

            <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-600 leading-relaxed">
              Our research-backed pedagogy transforms reading, phonics, Hindi, and math into joyful interactive adventures designed specifically for young minds aged 3 to 12.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {checklistItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-white/80 p-3.5 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">{item.title}</div>
                    <div className="text-[11px] text-slate-500 font-semibold leading-snug">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-sm rounded-2xl shadow-lg shadow-green-500/25 flex items-center gap-2 transition cursor-pointer"
                >
                  Start Learning 🚀
                </motion.button>
              </Link>

              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 bg-white border-2 border-purple-300 text-purple-600 hover:bg-purple-50 font-black text-sm rounded-2xl shadow-sm flex items-center gap-2 transition cursor-pointer"
                >
                  Explore Programs 📖
                </motion.button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
