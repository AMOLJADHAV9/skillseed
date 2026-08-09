import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, BookOpen, TrendingUp, Users, ArrowRight, Quote } from 'lucide-react';

export const ParentsTestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mrs. Shruthi',
      role: 'Mother of Aarav',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      text: 'We are incredibly impressed with our child\'s progress at Learn2Read. The interactive lessons and engaging activities have made learning so enjoyable! It\'s truly been a transformative journey for him.',
    },
    {
      id: 2,
      name: 'Mr. Bharath kumar',
      role: 'Father of Diya',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      text: 'Our child\'s confidence in reading has grown so much. The curriculum is amazing, and the instructors are very supportive. We\'re so grateful Learn2Read for laying such a strong foundation.',
    },
  ];

  const highlights = [
    {
      id: 1,
      title: 'Expert Instructors',
      subtitle: 'Trained & passionate educators',
      icon: Star,
      bgColor: 'bg-[#84CC16]',
      iconColor: 'text-white',
    },
    {
      id: 2,
      title: 'Engaging Curriculum',
      subtitle: 'Fun, interactive & effective',
      icon: BookOpen,
      bgColor: 'bg-[#8B5CF6]',
      iconColor: 'text-white',
    },
    {
      id: 3,
      title: 'Proven Results',
      subtitle: 'Building confident readers',
      icon: TrendingUp,
      bgColor: 'bg-[#EAB308]',
      iconColor: 'text-white',
    },
    {
      id: 4,
      title: 'Parent Trusted',
      subtitle: 'Loved by 1000+ families',
      icon: Users,
      bgColor: 'bg-[#84CC16]',
      iconColor: 'text-white',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#FAFBFD] overflow-hidden text-slate-900 font-sans border-t border-purple-100/60">
      
      {/* ─── 1. ABSTRACT BACKGROUND DOODLES & DOT MATRIX ───────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Organic Lime Green Wave Backdrop Blob (Far Left) */}
        <div className="absolute -left-[12%] top-[-10%] w-[55%] h-[120%] z-0 hidden lg:block opacity-90">
          <svg viewBox="0 0 600 700" fill="none" className="w-full h-full">
            <path
              d="M -100 -50 C 200 -50, 480 80, 420 320 C 360 560, 150 680, -100 750 Z"
              fill="url(#limeGradientBlob)"
            />
            <defs>
              <linearGradient id="limeGradientBlob" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A3E635" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#84CC16" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#65A30D" stopOpacity="0.95" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Top Center Lime Ring Doodle */}
        <div className="absolute top-10 left-[42%] w-8 h-8 rounded-full border-4 border-[#A3E635] opacity-70" />

        {/* Top Right Dotted Grid */}
        <div className="absolute top-8 right-10 opacity-30 flex flex-col gap-2 pointer-events-none hidden sm:flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-2">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              ))}
            </div>
          ))}
        </div>

        {/* Right Yellow Ring Doodle */}
        <div className="absolute top-[28%] right-[5%] w-10 h-10 rounded-full border-4 border-amber-400 opacity-60" />

        {/* Bottom Right Lime Triangle Outline */}
        <div className="absolute bottom-16 right-12 text-[#84CC16] opacity-60">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="12 2 22 20 2 20" />
          </svg>
        </div>

        {/* Bottom Right Soft Lime Soft Glow */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#ECFCCB] opacity-60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ─── MAIN TWO COLUMN CONTENT ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ─── LEFT COLUMN: HEADLINE & FAMILY PHOTO ─────────────────── */}
          <div className="lg:col-span-6 space-y-8 relative">
            
            {/* Subtitle Pill */}
            <div className="space-y-3">
              <span className="text-xs font-black tracking-widest text-[#8B5CF6] uppercase block">
                VOICES OF LEARN2READ PARENTS
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.18]">
                Echoes of Joy from<br />
                Parents of our{' '}
                <span className="text-[#65A30D]">Proud Readers</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-md leading-relaxed">
                Real stories. Real impact. Hear how Learn2Read is creating confident readers and happy learners.
              </p>
            </div>

            {/* Left Family Photo Card with Floating Speech Badge */}
            <div className="relative pt-2">
              
              {/* Decorative Purple Sparkle Underline */}
              <div className="absolute -top-4 left-10 w-24 h-2 border-b-2 border-purple-300 rounded-full opacity-60" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] max-w-lg">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=900"
                  alt="Parents reading happily with children on couch"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>

              {/* Floating Green Speech Bubble Badge (Bottom Left) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="absolute -bottom-5 -left-3 sm:left-4 w-14 h-14 rounded-full bg-[#84CC16] border-4 border-white text-white flex items-center justify-center shadow-xl z-20"
              >
                <Quote className="w-6 h-6 fill-current transform rotate-180" />
              </motion.div>

            </div>

          </div>

          {/* ─── RIGHT COLUMN: TESTIMONIAL CARDS & CTA ────────────────── */}
          <div className="lg:col-span-6 space-y-6">
            
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/60 border border-slate-100 relative group transition-all"
              >
                {/* Top Left Quote Graphic */}
                <div className="text-[#8B5CF6] opacity-80 mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Top Right Green Dotted Accent Box */}
                <div className="absolute top-6 right-6 w-12 h-10 rounded-2xl bg-[#ECFCCB] p-2 flex flex-col justify-between items-center opacity-80">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                  </div>
                </div>

                {/* Author Info (Avatar + Name & Subtitle) */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-200 shadow-md flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-base font-black text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-xs font-bold text-[#8B5CF6]">
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Quote Content Paragraph */}
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  "{item.text}"
                </p>

              </motion.div>
            ))}

            {/* Read More Testimonials Button */}
            <div className="pt-2">
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-black text-xs sm:text-sm rounded-full shadow-lg shadow-purple-200 hover:shadow-xl transition-all cursor-pointer group"
              >
                <span>Read More Testimonials</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

        {/* ─── 2. BOTTOM 4 FEATURE HIGHLIGHTS STRIP ───────────────────── */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h5 className="text-sm font-black text-slate-900 leading-snug">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-500 font-medium leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ParentsTestimonialSection;
