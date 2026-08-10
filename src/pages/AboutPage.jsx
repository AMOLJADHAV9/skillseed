import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Users,
  BookOpen,
  Star,
  Heart,
  Globe,
  CheckCircle2,
  Shield,
  Smartphone,
  Gamepad2,
  BarChart3,
  Rocket,
  GraduationCap,
  PlayCircle,
  Lightbulb,
  Send
} from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutPage = () => {
  const missionCards = [
    {
      title: 'Our Mission',
      desc: 'To deliver engaging, research-backed learning experiences that help children grow academically and personally.',
      icon: BookOpen,
      iconBg: 'bg-purple-100 text-[#7C3AED]',
      dotsColor: 'text-purple-300',
    },
    {
      title: 'Our Vision',
      desc: 'To become the most trusted learning companion for kids worldwide and shape a generation of lifelong learners.',
      icon: Shield,
      iconBg: 'bg-emerald-100 text-emerald-600',
      dotsColor: 'text-emerald-300',
    },
    {
      title: 'Our Values',
      desc: 'We believe in empathy, integrity, innovation, inclusivity, and excellence in everything we do.',
      icon: Star,
      iconBg: 'bg-amber-100 text-amber-600',
      dotsColor: 'text-amber-300',
    },
    {
      title: 'Our Promise',
      desc: 'We are committed to providing a safe, joyful, and inspiring learning environment for every child.',
      icon: Heart,
      iconBg: 'bg-rose-100 text-rose-600',
      dotsColor: 'text-rose-300',
    },
  ];

  const metrics = [
    {
      value: '50,000+',
      label: 'Happy Learners',
      sub: 'Empowered kids learning with confidence',
      icon: GraduationCap,
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      value: '1,000+',
      label: 'Expert Mentors',
      sub: 'Passionate educators and industry experts',
      icon: Users,
      iconBg: 'bg-purple-100 text-[#7C3AED]',
    },
    {
      value: '250+',
      label: 'Interactive Courses',
      sub: 'Engaging courses across multiple subjects',
      icon: PlayCircle,
      iconBg: 'bg-amber-100 text-amber-600',
    },
    {
      value: '25+',
      label: 'Countries Reached',
      sub: 'Global community of learners and parents',
      icon: Globe,
      iconBg: 'bg-rose-100 text-rose-600',
    },
  ];

  const features = [
    {
      title: 'Expert-Crafted Curriculum',
      desc: 'Designed by educators and subject experts for real learning outcomes.',
      icon: Users,
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      title: 'Track Progress Easily',
      desc: 'Detailed reports and insights for parents to track growth.',
      icon: BarChart3,
      iconBg: 'bg-pink-100 text-pink-600',
    },
    {
      title: 'Interactive & Engaging',
      desc: 'Fun activities, games, and stories that make learning exciting.',
      icon: Gamepad2,
      iconBg: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Learn Anytime, Anywhere',
      desc: 'Accessible on all devices – learn on the go, anytime!',
      icon: Smartphone,
      iconBg: 'bg-sky-100 text-sky-600',
    },
    {
      title: 'Safe & Child-Friendly',
      desc: 'A secure environment with zero ads and privacy-first approach.',
      icon: Shield,
      iconBg: 'bg-amber-100 text-amber-600',
    },
    {
      title: 'Awesome Support',
      desc: "We're here to help parents and kids every step of the way.",
      icon: Users,
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
  ];

  return (
    <div className="bg-[#FAF9FF] text-slate-900 font-sans min-h-screen">
      
      {/* ── 1. HERO HEADER ──────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#FAF5F8] via-[#FAF9FF] to-white overflow-hidden border-b border-slate-100 text-left">
        
        {/* Background Vectors */}
        <div className="absolute top-6 left-6 grid grid-cols-5 gap-2 opacity-30 hidden lg:grid pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          ))}
        </div>
        
        <div className="absolute top-10 left-1/3 opacity-70 hidden sm:block pointer-events-none">
          <div className="flex items-center gap-1 text-purple-400">
            <span className="text-xs border-t-2 border-dashed border-purple-300 w-12 inline-block" />
            <Send className="w-5 h-5 transform -rotate-12" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline & Intro */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-[#7C3AED]">
                <span className="text-xs font-black tracking-widest uppercase">
                  ABOUT SKILLSEED
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
                Empowering Young Minds for a{' '}
                <span className="relative inline-block text-[#7C3AED]">
                  Brighter Tomorrow
                  <svg className="absolute -bottom-2 left-0 w-full h-3.5 text-emerald-400 pointer-events-none" viewBox="0 0 120 16" fill="none" preserveAspectRatio="none">
                    <path d="M 3 12 C 35 3, 85 3, 117 12" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-500 max-w-xl leading-relaxed">
                At SkillSeed, we believe every child is unique and capable of amazing things. Our platform brings together expert educators, engaging content, and interactive learning experiences to help children learn with joy, confidence, and curiosity.
              </p>

              {/* Two Pill Badges Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* Pill 1 */}
                <div className="inline-flex items-center gap-3 p-3 px-4 bg-[#F0FDF4] rounded-2xl border border-emerald-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-sm">
                    👥
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">
                      Trusted by <span className="text-emerald-600">50,000+</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-500">
                      Parents &amp; Learners worldwide
                    </div>
                  </div>
                </div>

                {/* Pill 2 */}
                <div className="inline-flex items-center gap-3 p-3 px-4 bg-[#F0FDF4] rounded-2xl border border-emerald-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-sm">
                    🛡️
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">
                      Safe, Secure &amp;
                    </div>
                    <div className="text-[10px] font-bold text-slate-500">
                      Child-Friendly
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Photo Frame & Floating "Our Belief" Card */}
            <div className="lg:col-span-6 relative flex justify-center">
              
              {/* Floating 3D Lottie Graphic at Top Right of Hero */}
              <div className="absolute -top-16 -right-12 hidden lg:block pointer-events-none z-20">
                <dotlottie-wc
                  src="https://lottie.host/510baa83-406f-4047-8894-1ef1067de629/JCdJ1gWwTH.lottie"
                  autoplay
                  loop
                  style={{ width: '200px', height: '200px' }}
                ></dotlottie-wc>
              </div>

              <div className="relative w-full max-w-lg aspect-4/3 rounded-[36px] overflow-hidden border-4 border-white shadow-2xl bg-amber-50">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
                  alt="Kids learning with tablet and teacher"
                  className="w-full h-full object-cover"
                />

                {/* Top Right Floating Green Circle with White Heart */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-lg">
                  <Heart className="w-5 h-5 fill-white text-[#10B981]" />
                </div>

                {/* Floating "Our Belief" Card (Bottom Right) */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-2xl max-w-[240px] text-left space-y-1.5 hidden sm:block">
                  <div className="flex items-center gap-1.5 text-[#7C3AED] font-black text-xs">
                    <Heart className="w-4 h-4 fill-[#7C3AED]" />
                    <span>Our Belief</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">
                    Every child has unique potential. We provide the right tools, guidance, and environment to help them shine.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. OUR MISSION & VALUES ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF9FF] border-b border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-black text-[#10B981] uppercase tracking-widest block flex items-center justify-center gap-1.5">
              <span>✨</span> Our Mission &amp; Values <span>✨</span>
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed">
              We are on a mission to make quality learning accessible, engaging, and meaningful for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {missionCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white p-7 rounded-[28px] border border-slate-100 shadow-xl shadow-slate-100/70 space-y-4 hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className={`w-14 h-14 mx-auto rounded-2xl ${card.iconBg} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base font-black text-slate-900">{card.title}</h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* 4 dots decorative footer */}
                  <div className={`text-xs ${card.dotsColor} font-black tracking-widest select-none pt-2`}>
                    • • • •
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. GROWING TOGETHER, CREATING IMPACT ─────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F0FDF4] border border-emerald-100 p-8 sm:p-10 rounded-[32px] shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Left Header */}
            <div className="space-y-2 text-center lg:text-left max-w-sm z-10">
              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block">
                MAKING AN IMPACT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight leading-snug">
                Growing Together, <br />
                <span className="text-[#10B981]">Creating Impact</span>
              </h2>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Every milestone we achieve is a step towards a better learning future for children everywhere. Thank you to our amazing community for being part of our journey.
              </p>
            </div>

            {/* 4 Stat Cards Grid with Vertical Dividers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto z-10">
              {metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-md text-center space-y-2 flex flex-col justify-between">
                    <div className={`w-12 h-12 mx-auto rounded-full ${m.iconBg} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xl sm:text-2xl font-black text-slate-900">{m.value}</div>
                      <div className="text-xs font-black text-slate-800">{m.label}</div>
                      <div className="text-[10px] font-semibold text-slate-400 leading-tight pt-0.5">{m.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. WHY PARENTS CHOOSE SKILLSEED ───────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF9FF] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2 text-left">
            <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest block">
              WHY PARENTS CHOOSE SKILLSEED
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              A Learning Experience Kids Love &amp; Parents Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 6 Features */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              {features.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/80 flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-2xl ${f.iconBg} flex items-center justify-center flex-shrink-0 font-black text-lg`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-black text-slate-900">{f.title}</h3>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Photo with Overlay Quote Card & Gold Stars */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-[32px] overflow-hidden border-4 border-white shadow-2xl aspect-4/3 bg-purple-50">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=700"
                  alt="Parents and daughter learning on laptop"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlaid Quote Box (Bottom Center/Left) */}
              <div className="absolute -bottom-6 left-4 right-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-100 shadow-2xl text-left space-y-2 hidden sm:block">
                <div className="w-7 h-7 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center text-xs font-serif font-black">
                  “
                </div>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                  "SkillSeed has truly transformed the way my child learns. The platform is engaging, easy to use, and builds confidence."
                </p>
                <div className="flex items-center justify-between pt-1">
                  <div className="text-[11px] font-black text-slate-900">
                    – Neha R., Parent
                  </div>
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. THE PEOPLE BEHIND SKILLSEED (TEAM & ROCKET GRAPHIC) ──────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Team Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-[32px] overflow-hidden border-4 border-white shadow-2xl h-80 sm:h-96">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="SkillSeed Educators & Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Team Details & 3D Rocket (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left relative">
              
              <div className="space-y-2 pr-12">
                <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest block">
                  THE PEOPLE BEHIND SKILLSEED
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                  A Team of Passionate Educators &amp; Innovators
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl">
                  We are educators, designers, developers, and dreamers working together with one goal - to build the future of education for young minds.
                </p>
              </div>

              {/* 3 Pill Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-[#F0FDF4] rounded-2xl border border-emerald-100 shadow-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">💚</span>
                    <h3 className="text-xs font-black text-slate-900">Passionate</h3>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">We love what we do and it shows.</p>
                </div>

                <div className="p-4 bg-[#F3E8FF] rounded-2xl border border-purple-100 shadow-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-purple-100 text-[#7C3AED] flex items-center justify-center text-xs">💡</span>
                    <h3 className="text-xs font-black text-slate-900">Innovative</h3>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">We constantly explore new ways to improve.</p>
                </div>

                <div className="p-4 bg-[#FEF3C7] rounded-2xl border border-amber-100 shadow-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-xs">👤</span>
                    <h3 className="text-xs font-black text-slate-900">Student-Centric</h3>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">Every decision we make is for our learners.</p>
                </div>
              </div>

            </div>


          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;

