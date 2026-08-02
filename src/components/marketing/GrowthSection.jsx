import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GrowthAreaChart } from '../charts/GrowthAreaChart';
import { TrendingUp, Users, Globe, Award, Star, BookOpen } from 'lucide-react';

/**
 * AnimatedCounter
 * Counts up smoothly from 0 to value when scrolled into view.
 */
export const AnimatedCounter = ({ value, duration = 2.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  // Extract numeric digits
  const numericMatch = value.match(/\d[\d,]*/);
  const targetNum = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ''), 10) : 0;
  
  const matchStr = numericMatch ? numericMatch[0] : '';
  const matchIdx = value.indexOf(matchStr);
  const prefix = matchIdx > 0 ? value.substring(0, matchIdx) : '';
  const suffix = matchIdx >= 0 ? value.substring(matchIdx + matchStr.length) : value;

  useEffect(() => {
    if (!isInView || targetNum === 0) return;

    let startTime = null;
    const durationMs = duration * 1000;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      
      // Smooth exponential ease-out
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * targetNum));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, targetNum, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}
      {isInView ? count.toLocaleString() : 0}
      {suffix}
    </span>
  );
};

export const GrowthSection = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Students Enrolled',
      desc: 'Active young learners worldwide',
      color: 'text-purple-600 bg-purple-100/80 border-purple-200',
    },
    {
      icon: Globe,
      value: '35+',
      label: 'Countries Reached',
      desc: 'Global learning community',
      color: 'text-blue-600 bg-blue-100/80 border-blue-200',
    },
    {
      icon: Star,
      value: '98%',
      label: 'Parent Satisfaction',
      desc: 'Top-rated phonics program',
      color: 'text-amber-500 bg-amber-100/80 border-amber-200',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Expert Educators',
      desc: 'Certified child specialists',
      color: 'text-emerald-600 bg-emerald-100/80 border-emerald-200',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FAF5F8] via-white to-[#FAF5F8] border-y border-pink-100/60 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-100 rounded-full blur-[140px] opacity-35" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-pink-100 rounded-full blur-[140px] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Title */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-purple-100/80 border border-purple-200 text-[#C04DF7] text-xs font-black uppercase tracking-wider shadow-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Growth &amp; Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Empowering Young Minds Worldwide
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed">
            See how our interactive learning methodology translates into real student progress and global adoption over time.
          </p>
        </div>

        {/* Counter Cards Grid (Square Styling) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-none p-6 relative overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all group text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-none flex items-center justify-center border ${item.color} shadow-sm group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </div>
                  <span className="text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-none bg-slate-100 text-slate-600 border border-slate-200">
                    Live Metric
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                  <AnimatedCounter value={item.value} duration={2.2} />
                </div>
                <div className="text-sm font-black text-slate-800 mb-0.5">{item.label}</div>
                <div className="text-xs font-semibold text-slate-500 leading-snug">{item.desc}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Graph Animation Container (Square Styling) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-none p-6 sm:p-8 border-2 border-purple-100 shadow-md relative overflow-hidden text-left"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-none bg-emerald-500 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  Student Enrollment &amp; Milestone Progression
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                Interactive real-time graph tracking monthly growth across active courses, students, and global reach.
              </p>
            </div>
            
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="text-xs font-black text-purple-600 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-none flex items-center gap-1.5 shadow-xs">
                <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                2026 Growth Trajectory
              </span>
            </div>
          </div>

          {/* Area Chart Component */}
          <GrowthAreaChart />
        </motion.div>

      </div>
    </section>
  );
};
