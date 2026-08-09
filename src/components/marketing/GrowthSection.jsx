import React from 'react';
import { motion } from 'framer-motion';
import { GrowthAreaChart } from '../charts/GrowthAreaChart';
import { AnimatedCounter } from './GrowthSectionCounter';
import {
  TrendingUp,
  Users,
  Globe,
  Star,
  Award,
  ArrowRight,
  BarChart3,
  Calendar,
  Send
} from 'lucide-react';

export const GrowthSection = () => {
  const stats = [
    {
      id: 'students',
      icon: Users,
      value: '10,000+',
      label: 'Students Enrolled',
      desc: 'Active young learners worldwide',
      badge: 'LIVE METRIC',
      badgeSymbol: '●',
      iconBg: 'bg-purple-100 text-[#7C3AED]',
      badgeBg: 'bg-[#F3E8FF] text-[#7C3AED]',
      waveBg: 'bg-gradient-to-t from-purple-100/60 via-purple-50/20 to-transparent',
      buttonColor: 'text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white border-purple-200',
    },
    {
      id: 'countries',
      icon: Globe,
      value: '35+',
      label: 'Countries Reached',
      desc: 'Global learning community',
      badge: 'LIVE METRIC',
      badgeSymbol: '●',
      iconBg: 'bg-sky-100 text-[#0284C7]',
      badgeBg: 'bg-[#E0F2FE] text-[#0284C7]',
      waveBg: 'bg-gradient-to-t from-sky-100/60 via-sky-50/20 to-transparent',
      buttonColor: 'text-[#0284C7] hover:bg-[#0284C7] hover:text-white border-sky-200',
    },
    {
      id: 'satisfaction',
      icon: Star,
      value: '98%',
      label: 'Parent Satisfaction',
      desc: 'Top-rated phonics program',
      badge: 'LIVE METRIC',
      badgeSymbol: '◆',
      numberColor: 'text-[#D97706]',
      iconBg: 'bg-amber-100 text-[#D97706]',
      badgeBg: 'bg-[#FEF3C7] text-[#D97706]',
      waveBg: 'bg-gradient-to-t from-amber-100/60 via-amber-50/20 to-transparent',
      buttonColor: 'text-[#D97706] hover:bg-[#D97706] hover:text-white border-amber-200',
    },
    {
      id: 'educators',
      icon: Award,
      value: '50+',
      label: 'Expert Educators',
      desc: 'Certified child specialists',
      badge: 'LIVE METRIC',
      badgeSymbol: '●',
      numberColor: 'text-[#059669]',
      iconBg: 'bg-emerald-100 text-[#059669]',
      badgeBg: 'bg-[#DCFCE7] text-[#059669]',
      waveBg: 'bg-gradient-to-t from-emerald-100/60 via-emerald-50/20 to-transparent',
      buttonColor: 'text-[#059669] hover:bg-[#059669] hover:text-white border-emerald-200',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFBFF] relative overflow-hidden text-slate-900 font-sans">
      
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-100/60 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-32 w-96 h-96 bg-sky-100/60 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ─── SECTION HEADER WITH DOODLES & UNDERLINE ───────────────── */}
        <div className="relative text-center space-y-4 max-w-3xl mx-auto">
          
          {/* Top Left Paper Airplane Doodle */}
          <motion.div
            animate={{ y: [-4, 6, -4], rotate: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 left-2 sm:-left-12 opacity-80 text-indigo-400 hidden sm:block pointer-events-none"
          >
            <div className="flex items-center gap-1">
              <span className="text-xs border-t-2 border-dashed border-indigo-300 w-8 inline-block" />
              <Send className="w-6 h-6 transform -rotate-12" />
            </div>
          </motion.div>

          {/* Doodles Right */}
          <div className="absolute -top-4 right-0 sm:-right-8 flex items-center gap-3 text-2xl pointer-events-none hidden sm:flex">
            <span className="animate-pulse">🌸</span>
            <span className="text-sky-400">✦</span>
          </div>
          
          <div className="absolute top-12 left-8 text-amber-400 text-xl pointer-events-none hidden sm:block animate-bounce">
            ⭐
          </div>

          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-[#9333EA] shadow-sm">
            <TrendingUp className="w-4 h-4 text-[#9333EA]" />
            <span className="text-xs font-black tracking-wider uppercase">
              PROVEN GROWTH &amp; IMPACT
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
            Empowering Young Minds{' '}
            <span className="relative inline-block text-[#7C3AED]">
              Worldwide
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
            See how our interactive learning methodology translates into real student progress and global adoption over time.
          </p>
        </div>

        {/* ─── TOP 4 METRIC CARDS GRID ────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-[28px] p-6 border border-slate-100 shadow-xl shadow-slate-100/70 overflow-hidden flex flex-col justify-between h-[215px] transition-all cursor-pointer"
              >
                {/* Top Row: Icon & Live Metric Pill */}
                <div className="flex items-center justify-between relative z-10">
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-sm font-bold text-xl group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </div>
                  
                  <span className={`inline-flex items-center gap-1 text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full ${item.badgeBg} shadow-xs`}>
                    <span className="text-[8px]">{item.badgeSymbol}</span>
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Middle Body: Value, Title & Subtitle */}
                <div className="relative z-10 my-auto">
                  <div className={`text-3xl sm:text-4xl font-black ${item.numberColor || 'text-slate-900'} tracking-tight leading-none`}>
                    <AnimatedCounter value={item.value} duration={2.2} />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-2">{item.label}</div>
                  <div className="text-xs font-semibold text-slate-400 mt-0.5">{item.desc}</div>
                </div>

                {/* Bottom Row: Wave Gradient Tint & Action Button */}
                <div className={`absolute inset-x-0 bottom-0 h-24 ${item.waveBg} pointer-events-none z-0 rounded-b-[28px]`} />

                <div className="relative z-10 flex justify-end">
                  <div className={`w-8 h-8 rounded-full bg-white border ${item.buttonColor} shadow-md flex items-center justify-center transition-all`}>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── BOTTOM STUDENT ENROLLMENT CHART CARD ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/80 relative overflow-hidden"
        >
          {/* Header Inside Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#7C3AED] flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  Student Enrollment &amp; Milestone Progression
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Interactive real-time graph tracking monthly growth across active courses, students, and global reach.
                </p>
              </div>
            </div>

            {/* Dropdown Pill Button */}
            <div className="self-start md:self-auto">
              <button className="px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-[#7C3AED] text-xs font-black flex items-center gap-2 shadow-sm hover:bg-purple-100 transition cursor-pointer">
                <Calendar className="w-4 h-4" />
                <span>2024 Growth Trajectory</span>
                <span className="text-[10px]">▼</span>
              </button>
            </div>
          </div>

          {/* Interactive Recharts Line / Area Chart */}
          <GrowthAreaChart />

        </motion.div>

      </div>
    </section>
  );
};

export default GrowthSection;
