import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  ExternalLink,
  Award,
  Users,
  BookOpen,
  Heart,
  Globe,
  Sparkles,
  Send,
  ShieldCheck,
  PlayCircle,
  GraduationCap,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';

export const MentorsPage = () => {
  const testimonials = [
    {
      name: 'Ananya S.',
      role: 'Parent',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      text: 'SkillSeed has truly transformed the way my child learns. The interactive classes and caring mentors have boosted her confidence and curiosity!'
    },
    {
      name: 'Rohan P.',
      role: 'Parent',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      text: 'The courses are engaging and well-structured. I love seeing my son excited to learn every day!'
    },
    {
      name: 'Meena Iyer',
      role: 'Student',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
      text: 'I love the fun activities and games! Learning feels like an adventure here at SkillSeed.'
    }
  ];

  const popularCourses = [
    {
      id: 'course-1',
      title: 'Phonics Foundations',
      age: 'Ages 3-6',
      badgeBg: 'bg-[#10B981]',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=700',
      desc: 'Build strong reading skills with interactive phonics activities and real-world examples.'
    },
    {
      id: 'course-2',
      title: 'Active Readers - Vocabulary Boost',
      age: 'Ages 5-11',
      badgeBg: 'bg-[#8B5CF6]',
      image: '/images/course_active_readers_1785603941774.png',
      desc: 'Expand vocabulary and comprehension through stories, games & fun exercises.'
    },
    {
      id: 'course-3',
      title: 'Coding for Kids - Python Basics',
      age: 'Ages 6-12',
      badgeBg: 'bg-[#10B981]',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=700',
      desc: 'An exciting introduction to coding with Python through hands-on projects.'
    }
  ];

  return (
    <div className="bg-[#FAF9FF] text-slate-900 font-sans min-h-screen">
      
      {/* ── 1. HERO BANNER HEADER ───────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#FAF5F8] via-[#FAF9FF] to-white overflow-hidden border-b border-slate-100 text-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-10 left-12 opacity-75 hidden sm:block">
            <div className="flex items-center gap-1 text-emerald-400">
              <span className="text-xs border-t-2 border-dashed border-emerald-300 w-12 inline-block" />
              <Send className="w-6 h-6 transform -rotate-12" />
            </div>
          </div>
          <div className="absolute top-12 right-16 text-amber-400 text-2xl hidden sm:block">
            ⭐
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-[#7C3AED]">
            <span className="text-xs font-black tracking-widest uppercase">
              THE SKILLSEED JOURNEY
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
            Discover the{' '}
            <span className="relative inline-block text-[#7C3AED]">
              SkillSeed
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400 pointer-events-none" viewBox="0 0 100 12" fill="none">
                <path d="M 2 8 C 30 2, 70 2, 98 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{' '}
            Journey
          </h1>

          <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-500 max-w-xl mx-auto leading-relaxed pt-1">
            Empowering young minds with joy-driven learning, real skills, and endless possibilities.
          </p>
        </div>
      </section>

      {/* ── 2. OUR PURPOSE: CULTIVATING THE JOY OF LEARNING ───────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-[36px] overflow-hidden border-4 border-white shadow-2xl bg-amber-50">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                  alt="Student with Folder"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-4 right-4 w-44 h-32 rounded-2xl overflow-hidden border-2 border-white shadow-2xl z-20 bg-slate-900 group cursor-pointer hidden sm:block">
                  <img
                    src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=400"
                    alt="Classroom Video"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#7C3AED] text-white flex items-center justify-center shadow-lg">
                      <PlayCircle className="w-6 h-6 fill-white text-[#7C3AED]" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest block">
                OUR PURPOSE
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
                Cultivating the Joy of Learning, One Mind at a Time 💚
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                At SkillSeed, we believe every child is unique and capable of amazing things. Our mission is to make learning joyful, meaningful, and accessible through engaging courses in Phonics, Languages, Math, Coding, and more. We blend interactive content with expert guidance to help children build strong foundations and become confident learners for life.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-4 bg-[#F8F7FF] rounded-2xl border border-purple-100 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#7C3AED] flex items-center justify-center font-black text-lg flex-shrink-0">
                    📚
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-900">Expert-Crafted</h3>
                    <p className="text-[11px] font-bold text-slate-500">Curriculum</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-[#F0FDF4] rounded-2xl border border-emerald-100 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-lg flex-shrink-0">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-900">Safe &amp; Child</h3>
                    <p className="text-[11px] font-bold text-slate-500">Friendly</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE OFFER ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF9FF] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2 text-left">
            <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest block">
              WHAT WE OFFER
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Discover the Love-Filled Education We Offer for Curious Minds
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-2xl">
              Interactive, engaging, and designed to spark curiosity and creativity in every young learner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-black text-lg">
                  🧑‍🏫
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-black text-slate-900">Interactive Learning</h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Live classes, fun activities &amp; hands-on learning.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 font-black text-lg">
                  🎨
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-black text-slate-900">Expert Mentorship</h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Guided by experienced educators who care.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 font-black text-lg">
                  🛡️
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-black text-slate-900">Foundations First</h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Strong basics in reading, writing, math &amp; more.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 font-black text-lg">
                  🏠
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-black text-slate-900">Safe Environment</h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    A secure space where kids learn and grow.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 font-black text-lg">
                  📊
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-black text-slate-900">Fun &amp; Engaging</h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Real-time reports to track your child's growth.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 font-black text-lg">
                  🎮
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-black text-slate-900">Fun &amp; Engaging</h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Gamified lessons that make learning exciting.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[32px] overflow-hidden border-4 border-white shadow-2xl aspect-4/3">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
                  alt="Classroom Education"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. VOICES OF OUR COMMUNITY ──────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest block">
              VOICES OF OUR COMMUNITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Echoes of Joy from <span className="underline decoration-emerald-400">Parents</span> and <span className="underline decoration-purple-400">Learners</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-[32px] overflow-hidden border-4 border-white shadow-2xl h-80 sm:h-96">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=700"
                  alt="Family Learning Together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-left">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-[#FAF9FF] p-5 sm:p-6 rounded-2xl border border-purple-100/80 shadow-sm flex items-start gap-4 relative">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-xl object-cover flex-shrink-0 border-2 border-purple-200"
                  />
                  <div className="space-y-1 pr-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-slate-900">{t.name}</span>
                      <span className="text-[10px] font-black text-[#7C3AED] bg-purple-100 px-2 py-0.5 rounded-full uppercase">
                        {t.role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed pt-1">
                      "{t.text}"
                    </p>
                  </div>
                  <span className="absolute top-4 right-4 text-2xl text-purple-200 font-serif">
                    “
                  </span>
                </div>
              ))}

              <div className="pt-3 text-center sm:text-left">
                <button className="px-6 py-3 bg-[#10B981] hover:bg-emerald-600 text-white font-black text-xs rounded-full shadow-md transition flex items-center gap-2 cursor-pointer mx-auto sm:mx-0">
                  <span>Read More Stories</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. POPULAR COURSES ROW ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF9FF] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest block">
              POPULAR COURSES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Unlock the Treasures of Practical Education Knowledge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 text-left">
            {popularCourses.map((c) => (
              <div key={c.id} className="bg-white rounded-[24px] border border-slate-100 shadow-xl shadow-slate-100/80 overflow-hidden flex flex-col justify-between group cursor-pointer hover:-translate-y-1 transition duration-300">
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className={`absolute top-3 right-3 ${c.badgeBg} text-white font-black text-[11px] px-3 py-1 rounded-full shadow-sm`}>
                    {c.age}
                  </span>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-black text-slate-900 group-hover:text-[#7C3AED] transition line-clamp-1">
                      {c.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed line-clamp-2">
                      {c.desc}
                    </p>
                  </div>

                  <Link to={`/courses/${c.id}`} className="text-xs font-black text-[#7C3AED] flex items-center gap-1 hover:underline pt-2">
                    <span>Explore Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default MentorsPage;

