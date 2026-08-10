import React from 'react';
import { motion } from 'framer-motion';
import { GrowthAreaChart } from '../charts/GrowthAreaChart';
import { AnimatedCounter } from './GrowthSectionCounter';
import {
  Users,
  Globe,
  Star,
  Award,
  ArrowRight,
  BarChart3,
  Calendar,
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
      badgeSymbol: '•',
      iconBg: 'bg-[#F3E8FF] text-[#7C3AED]',
      badgeBg: 'bg-[#F3E8FF] text-[#7C3AED]',
      buttonColor: 'text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white border-purple-200',
    },
    {
      id: 'countries',
      icon: Globe,
      value: '35+',
      label: 'Countries Reached',
      desc: 'Global learning community',
      badge: 'LIVE METRIC',
      badgeSymbol: '•',
      iconBg: 'bg-[#E0F2FE] text-[#0284C7]',
      badgeBg: 'bg-[#E0F2FE] text-[#0284C7]',
      buttonColor: 'text-[#0284C7] hover:bg-[#0284C7] hover:text-white border-sky-200',
    },
    {
      id: 'satisfaction',
      icon: Star,
      value: '98%',
      label: 'Parent Satisfaction',
      desc: 'Top-rated phonics program',
      badge: 'LIVE METRIC',
      badgeSymbol: '•',
      numberColor: 'text-[#EA580C]',
      iconBg: 'bg-[#FEF3C7] text-[#D97706]',
      badgeBg: 'bg-[#FEF3C7] text-[#D97706]',
      buttonColor: 'text-[#D97706] hover:bg-[#D97706] hover:text-white border-amber-200',
    },
    {
      id: 'educators',
      icon: Award,
      value: '50+',
      label: 'Expert Educators',
      desc: 'Certified child specialists',
      badge: 'LIVE METRIC',
      badgeSymbol: '•',
      numberColor: 'text-[#059669]',
      iconBg: 'bg-[#DCFCE7] text-[#059669]',
      badgeBg: 'bg-[#DCFCE7] text-[#059669]',
      buttonColor: 'text-[#059669] hover:bg-[#059669] hover:text-white border-emerald-200',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FE] relative overflow-hidden text-slate-900 font-sans">
      
      {/* ─── LEFT SIDE BACKGROUND DECORATIONS ───────────────────────────── */}
      {/* 5x6 Purple Dot Matrix (Top Left) */}
      <div className="absolute top-6 left-6 grid grid-cols-5 gap-2 opacity-35 pointer-events-none z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        ))}
      </div>

      {/* Outlined Triangle (Mid Left) */}
      <div className="absolute top-1/4 left-8 text-purple-300 pointer-events-none hidden sm:block z-0">
        <svg className="w-8 h-8 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12,2 22,22 2,22" />
        </svg>
      </div>

      {/* Outlined Circles (Left Side) */}
      <div className="absolute top-1/2 left-6 w-12 h-12 border-2 border-purple-300/40 rounded-full pointer-events-none hidden sm:block z-0" />
      <div className="absolute bottom-1/4 left-12 w-6 h-6 border-2 border-purple-300/30 rounded-full pointer-events-none hidden sm:block z-0" />
      <div className="absolute bottom-8 left-6 w-5 h-5 border-2 border-purple-300/40 rounded-full pointer-events-none z-0" />


      {/* ─── RIGHT SIDE LIME GREEN CURVED BACKGROUND SHAPE ────── */}
      <div className="absolute top-0 right-0 bottom-0 w-1/3 max-w-[440px] hidden xl:block pointer-events-none overflow-hidden z-0">
        {/* Curved Green Background Shape */}
        <div className="absolute inset-0 bg-[#bef264] rounded-l-[180px] opacity-95">
          
          {/* Concentric Radar Rings */}
          <div className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[360px] h-[360px] border border-white/35 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[280px] h-[280px] border border-white/35 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[200px] h-[200px] border border-white/35 rounded-full pointer-events-none" />

          {/* Paper Airplane with Dashed Trajectory */}
          <div className="absolute top-12 right-12 opacity-85">
            <svg className="w-20 h-20 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10,80 Q50,20 85,15" strokeDasharray="4 4" />
              <polygon points="85,15 65,30 72,40" fill="white" />
            </svg>
          </div>

          {/* Floating Geometric Outlines */}
          <div className="absolute top-28 right-8 w-6 h-6 border-2 border-white/70 transform rotate-12" />
          <div className="absolute top-48 right-36 w-5 h-5 border-2 border-white/70 rounded-full" />
          <div className="absolute top-64 right-10 w-4 h-4 border-2 border-white/60 transform rotate-45" />

          {/* Striped Patterned Circle at Bottom Right */}
          <div className="absolute bottom-16 right-6 w-20 h-20 rounded-full border-2 border-white/40 overflow-hidden opacity-50">
            <div className="w-full h-full bg-[repeating-linear-gradient(45deg,white,white_2px,transparent_2px,transparent_8px)]" />
          </div>

          {/* Dot Grid at Bottom Right */}
          <div className="absolute bottom-6 right-8 grid grid-cols-4 gap-2 opacity-50">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
            ))}
          </div>
        </div>
      </div>

      {/* Floating "Book Demo ⭐" Badge on Right Edge */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center justify-center bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100/80 hover:scale-105 transition-transform cursor-pointer">
        <span className="text-xs font-black text-indigo-900 tracking-tight">Book Demo</span>
        <span className="text-sm mt-0.5">⭐</span>
      </div>


      {/* ─── MAIN CONTENT CONTAINER ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* ─── TOP 4 METRIC CARDS GRID ────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-[24px] p-6 border border-slate-100 shadow-md shadow-slate-200/40 flex flex-col justify-between h-[200px] transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Top Row: Icon & Live Metric Pill */}
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-2xl ${item.iconBg} flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" strokeWidth={2.3} />
                  </div>
                  
                  <span className={`inline-flex items-center gap-1 text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full ${item.badgeBg}`}>
                    <span className="text-[8px]">{item.badgeSymbol}</span>
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Body Content */}
                <div className="my-auto">
                  <div className={`text-3xl font-black ${item.numberColor || 'text-slate-900'} tracking-tight leading-none`}>
                    <AnimatedCounter value={item.value} duration={2.0} />
                  </div>
                  <div className="text-sm font-black text-slate-900 mt-2">{item.label}</div>
                  <div className="text-xs font-semibold text-slate-400 mt-0.5">{item.desc}</div>
                </div>

                {/* Bottom Arrow Button */}
                <div className="flex justify-end">
                  <div className={`w-7 h-7 rounded-full bg-white border ${item.buttonColor} shadow-xs flex items-center justify-center transition-all`}>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
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
          className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden"
        >
          {/* Header Inside Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-100">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center font-bold flex-shrink-0 shadow-xs">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                  Student Enrollment &amp; Milestone Progression
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Interactive real-time graph tracking monthly growth across active courses, students, and global reach.
                </p>
              </div>
            </div>

            {/* Dropdown Pill Button */}
            <div className="self-start md:self-auto">
              <button className="px-3.5 py-1.5 rounded-full bg-[#F3E8FF]/70 border border-[#E9D5FF] text-[#7C3AED] text-xs font-black flex items-center gap-2 shadow-xs hover:bg-[#F3E8FF] transition cursor-pointer">
                <Calendar className="w-3.5 h-3.5" />
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

