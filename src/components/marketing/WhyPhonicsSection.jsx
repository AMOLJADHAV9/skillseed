import React from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Sparkles,
  Star
} from 'lucide-react';

export const WhyPhonicsSection = () => {
  const itemsCol1 = [
    {
      id: 'customized',
      title: 'Customized Learning Paths',
      sub: '',
      desc: "Education tailored to your child's level and learning pace, ensuring a truly personalized journey.",
      iconBg: 'bg-[#DCFCE7] border border-emerald-200',
      svgSrc: '/svg/book-opened-svgrepo-com.svg',
    },
    {
      id: 'convenience',
      title: 'Convenience',
      sub: '',
      desc: 'With our flexible schedule, you have the freedom to learn at your own pace.',
      iconBg: 'bg-[#FEF3C7] border border-amber-200',
      svgSrc: '/svg/laptop-with-a-graduation-cap-svgrepo-com.svg',
    },
    {
      id: 'instructors',
      title: 'Experienced Instructors',
      sub: 'Masters of Phonics',
      desc: 'Our seasoned educators foster a love for learning, armed with expertise in phonics and early childhood education.',
      iconBg: 'bg-[#F3E8FF] border border-purple-200',
      svgSrc: '/svg/bachelor-hat-svgrepo-com.svg',
    },
    {
      id: 'growth',
      title: 'Visible Growth',
      sub: 'Witness the Transformation',
      desc: 'See your child become a confident reader and fluent English speaker - their progress and happiness define our success.',
      iconBg: 'bg-[#FEF9C3] border border-yellow-200',
      svgSrc: '/svg/growth-svgrepo-com.svg',
    },
  ];

  const itemsCol2 = [
    {
      id: 'interactive',
      title: 'Interactive Classes',
      sub: '',
      desc: 'We have a track record of delivering proven results, with countless individuals achieving remarkable success in their respective fields after completing the program.',
      iconBg: 'bg-[#E0F2FE] border border-sky-200',
      svgSrc: '/svg/instructor-lecture-with-sceen-projection-tool-svgrepo-com.svg',
    },
    {
      id: 'attention',
      title: 'Personalized Attention',
      sub: 'Every Step of the Way',
      desc: "One-on-one or small batch sizes for an enriched learning experience tailored to your child's needs.",
      iconBg: 'bg-[#FFE4E6] border border-rose-200',
      svgSrc: '/svg/woman-taking-online-classes-svgrepo-com.svg',
    },
    {
      id: 'assurance',
      title: 'Money-Back Assurance',
      sub: 'Our Promise of Excellence',
      desc: 'We value your confidence in us and back it up with a Money-back Assurance.',
      iconBg: 'bg-[#DCFCE7] border border-emerald-200',
      svgSrc: '/svg/money-back-business-warranty-satisfaction-marketing-guaranted-svgrepo-com.svg',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAFBFF] relative overflow-hidden text-slate-900 font-sans border-t border-slate-100">
      
      {/* Ambient background blur */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 -left-28 w-96 h-96 bg-purple-100/50 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ─── 1. SECTION HEADER ─────────────────────────────────────── */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Subtag */}
          <span className="text-xs font-black text-[#E11D48] tracking-widest uppercase block">
            WHY CHOOSE OUR PHONICS CLASSES?
          </span>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.25]">
            Igniting Curiosity, Inspiring Confidence:
            <br />
            <span className="text-slate-900">Unlock Your Child’s Reading Potential with </span>
            <span className="relative inline-block text-[#7C3AED]">
              Learn2Read
              {/* Yellow brush stroke */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-3 text-amber-400 pointer-events-none"
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
        </div>

        {/* ─── 2. MAIN 3-COLUMN CONTENT (COL 1 + COL 2 + ILLUSTRATION) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (4 items) */}
          <div className="lg:col-span-4 space-y-8">
            {itemsCol1.map((item, idx) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 group"
                >
                  {/* SVG Icon Box */}
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center p-2.5 flex-shrink-0 shadow-xs group-hover:scale-110 transition-transform mt-0.5`}>
                    <img src={item.svgSrc} alt={item.title} className="w-full h-full object-contain" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-0.5">
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    {item.sub && (
                      <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wide">
                        {item.sub}
                      </div>
                    )}
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Middle Column (3 items) */}
          <div className="lg:col-span-4 space-y-8">
            {itemsCol2.map((item, idx) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 group"
                >
                  {/* SVG Icon Box */}
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center p-2.5 flex-shrink-0 shadow-xs group-hover:scale-110 transition-transform mt-0.5`}>
                    <img src={item.svgSrc} alt={item.title} className="w-full h-full object-contain" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-0.5">
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    {item.sub && (
                      <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wide">
                        {item.sub}
                      </div>
                    )}
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Playful Doodled Girl Graphic Area */}
          <div className="lg:col-span-4 relative flex justify-center items-center py-6">
            
            {/* Outer Decorative Dashed Frame */}
            <div className="relative w-full max-w-[340px] aspect-square rounded-[60px] p-4 flex items-center justify-center">
              
              {/* SVG Dashed Oval Outline */}
              <svg className="absolute inset-0 w-full h-full text-slate-300 pointer-events-none" viewBox="0 0 340 340" fill="none">
                <rect x="10" y="10" width="320" height="320" rx="55" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              </svg>

              {/* Central Girl Student Photo with soft drop shadow & rounded border */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full rounded-[48px] overflow-hidden shadow-2xl shadow-purple-200/60 border-4 border-white bg-amber-50"
              >
                <img
                  src="/images/Image.884b6ab91d3401e5785d-removebg-preview.png"
                  alt="Student with Apple & Books"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* ─── FLOATING DOODLES & BADGES ───────────────────────── */}
              
              {/* Paper Airplane Top Left */}
              <motion.div
                animate={{ y: [-4, 4, -4], rotate: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 z-20 text-indigo-500 pointer-events-none"
              >
                <div className="flex items-center gap-1">
                  <Send className="w-8 h-8 transform -rotate-12 fill-indigo-100" />
                  <span className="border-t-2 border-dashed border-indigo-300 w-8 inline-block" />
                </div>
              </motion.div>

              {/* Number 1, 2, 3 Doodles on Left Side */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-1/4 z-20 flex flex-col gap-1 font-black leading-none pointer-events-none"
              >
                <span className="text-4xl text-amber-500 drop-shadow-sm transform -rotate-12 inline-block">1</span>
                <span className="text-4xl text-sky-500 drop-shadow-sm transform rotate-6 inline-block ml-3">2</span>
                <span className="text-4xl text-rose-500 drop-shadow-sm transform -rotate-6 inline-block ml-1">3</span>
              </motion.div>

              {/* "GET READY!" Speech Badge (Top Right) */}
              <motion.div
                animate={{ scale: [0.96, 1.04, 0.96], rotate: [4, 8, 4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 z-30 bg-white border-2 border-amber-400 rounded-3xl px-4 py-2 shadow-xl text-amber-600 font-black text-xs tracking-wider uppercase flex items-center gap-1"
              >
                <span>GET READY!</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-300" />
              </motion.div>

              {/* Stars Doodle Bottom Right */}
              <div className="absolute -bottom-3 -right-2 z-20 flex items-center gap-1 text-2xl pointer-events-none">
                <Star className="w-6 h-6 text-sky-400 fill-sky-200 animate-spin" style={{ animationDuration: '8s' }} />
                <Star className="w-5 h-5 text-amber-400 fill-amber-300 animate-bounce" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyPhonicsSection;
