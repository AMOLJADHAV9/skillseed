import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialProofSection } from '../components/marketing/SocialProofSection';
import { GrowthSection } from '../components/marketing/GrowthSection';
import { HeroCarousel } from '../components/marketing/HeroCarousel';
import { KidsPhotoGallery } from '../components/marketing/KidsPhotoGallery';
import { TestimonialV2 } from '../components/ui/testimonial-v2';
import FaqSection from '@/components/ui/habit-faq-scroller';





import {
  Check,
  Play,
  Star,
  ChevronDown,
  Volume2,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  X,
  Globe,
  Clock,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  CalendarHeart,
  ClipboardCheck,
  Rocket
} from 'lucide-react';
import { CourseCard } from '../components/learning/CourseCard';
import { MOCK_COURSES } from '../data/mockCourses';

export const LandingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(true);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const stats = [
    { icon: '🌍', value: '35+', label: 'Countries' },
    { icon: '⭐', value: '98%', label: 'Satisfaction' },
    { icon: '👦', value: '10,000+', label: 'Students' },
    { icon: '👩‍🏫', value: '50+', label: 'Expert Teachers' },
  ];

  const features = [
    {
      icon: (
        <div className="w-12 h-12 rounded-none bg-purple-100/80 text-[#C04DF7] flex items-center justify-center flex-shrink-0 text-xl font-black shadow-sm border border-purple-200">
          🎯
        </div>
      ),
      title: 'Live 1-on-1 Classes',
      desc: 'Interactive sessions conducted on Zoom with personalized attention and max 4:1 student-teacher ratio.',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-none bg-amber-100/80 text-amber-600 flex items-center justify-center flex-shrink-0 text-xl font-black shadow-sm border border-amber-200">
          📖
        </div>
      ),
      title: 'Phonics & Reading',
      desc: 'Comprehensive phonics curriculum from alphabet sounds to advanced spelling rules and reading fluency.',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-none bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center flex-shrink-0 text-sm font-black tracking-tighter shadow-sm border border-emerald-200">
          IN
        </div>
      ),
      title: 'Hindi Language',
      desc: 'Learn Swar, Vyanjan, Matra and Hindi grammar through engaging stories and interactive games.',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-none bg-rose-100/80 text-rose-500 flex items-center justify-center flex-shrink-0 text-[11px] font-black shadow-sm leading-tight text-center border border-rose-200">
          1 2<br />3 4
        </div>
      ),
      title: 'Math & Logic',
      desc: 'Build strong numeracy and problem-solving skills with our playful, puzzle-based math curriculum.',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-none bg-sky-100/80 text-sky-600 flex items-center justify-center flex-shrink-0 text-xl font-black shadow-sm border border-sky-200">
          🎮
        </div>
      ),
      title: 'Gamified Learning',
      desc: 'Kids earn badges, XP points and unlock rewards that make every lesson exciting and motivating.',
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-none bg-indigo-100/80 text-indigo-600 flex items-center justify-center flex-shrink-0 text-xl font-black shadow-sm border border-indigo-200">
          📊
        </div>
      ),
      title: 'Progress Tracking',
      desc: 'Detailed parent dashboards with weekly progress reports, milestones and teacher feedback.',
    },
  ];



  const faqs = [
    {
      q: 'What is the format of Learn2Read online classes?',
      a: 'Our classes are live, conducted on Zoom and filled with interactive exercises that engage children and promote active participation in the language & STEM learning process.',
    },
    {
      q: 'How does Learn2Read incorporate personalized attention?',
      a: 'We ensure personalized attention by maintaining small class sizes (maximum 4:1 student-teacher ratio) and fostering individualized learning experiences.',
    },
    {
      q: 'What qualifications do Learn2Read teachers have?',
      a: 'Our teachers possess advanced qualifications and experience in child-centric educational methods, with a minimum of 2+ years teaching experience.',
    },
    {
      q: 'Can my child join with little to no prior reading experience?',
      a: 'Absolutely! We welcome all children including complete beginners who don\'t recognize letters or have minimal reading exposure.',
    },
    {
      q: 'What age groups do you cater to?',
      a: 'We offer programs for children aged 3 to 12 years across Phonics, Hindi, English Grammar and Math — each tailored to the child\'s current learning level.',
    },
  ];

  const countries = ['🇮🇳 India', '🇦🇪 UAE', '🇺🇸 USA', '🇨🇦 Canada', '🇦🇺 Australia', '🇶🇦 Qatar', '🇧🇪 Belgium', '🇬🇧 UK'];

  return (
    <div className="relative overflow-hidden bg-[#FAF5F8] text-slate-900 font-sans min-h-screen">

      {/* Global glow blobs that make glass effects pop */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-80px] right-[-60px] w-[500px] h-[500px] rounded-full bg-purple-200 opacity-25 blur-[120px]" />
        <div className="absolute top-[40%] left-[-80px] w-[400px] h-[400px] rounded-full bg-pink-200 opacity-20 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] rounded-full bg-indigo-200 opacity-15 blur-[100px]" />
      </div>

      {/* Fixed "Book Demo" vertical pill on far right */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={() => setDemoModalOpen(true)}
          className="bg-white border-2 border-purple-300 text-purple-600 font-black text-xs px-3 py-3 rounded-none shadow-xl flex flex-col items-center gap-1 cursor-pointer hover:bg-purple-50 transition"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span>Book Demo</span>
          <span className="text-amber-400">⭐</span>
        </button>
      </div>

      {/* ─── HERO SECTION ──────────────────────────────── */}
      <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
        {/* Ambient Glow Blobs */}
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] bg-pink-200/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* LEFT: Text, Highlights & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              {/* Animated Live Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md border border-purple-200/80 rounded-none shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-[#C04DF7] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 bg-[#C04DF7]" />
                </span>
                <span className="text-xs font-black text-[#C04DF7] tracking-wide">
                  Interactive LIVE Classes for Ages 3–12
                </span>
                <span className="px-2.5 py-0.5 bg-purple-100 text-[10px] font-black text-purple-700 ml-1 rounded-none">
                  ⭐ Top Rated
                </span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  Build Your Child's <br />
                  <span className="gradient-text-purple italic pr-2">Reading & STEM</span> <br />
                  Superpowers 🚀
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-sm sm:text-base font-semibold text-slate-600 max-w-lg leading-relaxed">
                Unlock your child's reading fluency and cognitive growth with <span className="text-[#C04DF7] font-black">Learn2Read</span> — India's premier phonics & STEM academy trusted by parents across 35+ countries.
              </p>

              {/* 2x2 Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {[
                  { icon: '🎯', title: 'Max 4:1 Batch Ratio', desc: 'Personalized attention' },
                  { icon: '🏆', title: 'Gamified Badges', desc: 'Fun XP & rewards' },
                  { icon: '📖', title: 'Phonics & Grammar', desc: 'Alphabet to fluency' },
                  { icon: '🌍', title: '35+ Countries', desc: 'Global community' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3 p-3 rounded-none bg-white/90 border border-slate-200/80 shadow-sm hover:shadow-md transition">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-xs font-black text-slate-900">{item.title}</div>
                      <div className="text-[10px] text-slate-500 font-semibold">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* High-Converting CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-4 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-sm rounded-none shadow-xl shadow-green-500/25 flex items-center gap-2.5 transition cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-none bg-white/30 flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                  </div>
                  Book Free Demo Class 🚀
                </motion.button>

                <Link to="/courses">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-7 py-4 bg-white border-2 border-purple-200 text-[#C04DF7] hover:bg-purple-50 font-black text-sm rounded-none shadow-sm flex items-center gap-2 transition cursor-pointer"
                  >
                    View All Courses <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>

              {/* Country Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] font-bold text-slate-400 mr-1">Trusted in:</span>
                {countries.slice(0, 5).map((c) => (
                  <span key={c} className="px-3 py-1 text-[10px] font-bold bg-white border border-slate-200 rounded-none text-slate-600 shadow-sm">
                    {c}
                  </span>
                ))}
                <span className="px-3 py-1 text-[10px] font-bold bg-white border border-slate-200 rounded-none text-slate-400">
                  +30 more
                </span>
              </div>
            </motion.div>

            {/* RIGHT: Hero Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 relative flex justify-center"
            >
              <HeroCarousel />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── KIDS PHOTO GALLERY GRID (NEW) ────────────── */}
      <KidsPhotoGallery />



      {/* ─── GROWTH & ANIMATED STATS COUNTER SECTION ────── */}
      <GrowthSection />



      {/* ─── SOCIAL PROOF ──────────────────────────────── */}
      <SocialProofSection />

      {/* ─── WHY LEARN2READ FEATURES ──────────────────── */}
      <section className="py-20 md:py-28 bg-[#FAF5F8] relative overflow-hidden">
        {/* Soft background ambient lighting */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-200/30 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-200/30 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">
              WHY SKILLSEED
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Everything Your Child Needs to Excel
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed">
              A holistic, research-backed curriculum designed to build reading, language, and numeracy skills with joy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-none p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                {f.icon}
                <div>
                  <h3 className="text-base font-black text-slate-900 mb-1 leading-snug">{f.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED COURSES ─────────────────────────── */}
      <section className="py-20 bg-white border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest">
                OUR POPULAR PROGRAMS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Interactive Phonics &amp; STEM Classes
              </h2>
              <p className="text-sm text-slate-600 font-semibold">
                Designed to build reading fluency, creative problem-solving, and confidence.
              </p>
            </div>
            <Link to="/courses">
              <button className="flex-shrink-0 px-5 py-2.5 border-2 border-[#C04DF7] text-[#C04DF7] font-black text-sm rounded-none hover:bg-purple-50 transition flex items-center gap-2 cursor-pointer">
                View All Courses <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {MOCK_COURSES.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#FAF5F8] to-purple-50 border-t border-pink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Start Learning in 3 Easy Steps
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting dashed line in background */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] border-t-2 border-dashed border-purple-200 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              {[
                { step: '01', icon: CalendarHeart, title: 'Book a Free Demo', desc: 'Talk to our counsellor and book a no-obligation free trial class for your child.' },
                { step: '02', icon: ClipboardCheck, title: 'Get Assessed', desc: 'Our educators assess your child\'s current level and recommend the perfect course.' },
                { step: '03', icon: Rocket, title: 'Start Learning!', desc: 'Your child joins live interactive sessions and starts their reading journey immediately.' },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-6 group"
                >
                  <div className="relative">
                    <div className="w-24 h-24 rounded-none bg-white border-2 border-purple-200 shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-[#C04DF7]">
                      <item.icon className="w-10 h-10 text-[#C04DF7] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-3 -right-3 w-9 h-9 rounded-none bg-[#C04DF7] text-white text-xs font-black flex items-center justify-center shadow-md border-2 border-white">
                      {item.step}
                    </div>
                  </div>
                  <div className="space-y-2.5 px-2">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#C04DF7] transition-colors">{item.title}</h3>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-8 py-4 bg-[#C04DF7] hover:bg-[#b03de5] text-white font-black text-xs sm:text-sm rounded-none shadow-lg transition cursor-pointer"
            >
              Book Your Free Demo Now 🎁
            </button>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────── */}
      <TestimonialV2 />

      {/* ─── FAQ SECTION ──────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#FAF5F8] to-white border-t border-pink-100 overflow-hidden">
        <FaqSection
          data={{
            mainTitle: "Frequently Asked Questions",
            mainSubtitle: "Everything parents and students need to know about our interactive live classes, trial sessions, and curriculum.",
            rows: [
              {
                id: 'row1',
                speed: '55s',
                direction: 'left',
                faqItems: [
                  {
                    id: 'q1',
                    question: 'What is the format of live classes?',
                    answer: 'Our classes are live on Zoom, capped at a 4:1 student-teacher ratio for maximum personal interaction.'
                  },
                  {
                    id: 'q2',
                    question: 'Is there a free trial class?',
                    answer: 'Yes! You can book a 1-on-1 free trial session with our certified educators before deciding to enroll.'
                  },
                  {
                    id: 'q3',
                    question: 'What age groups do you cater to?',
                    answer: 'We offer courses for children aged 3 to 12 in Phonics, Reading, Hindi, English Grammar, and Math.'
                  }
                ]
              },
              {
                id: 'row2',
                speed: '45s',
                direction: 'right',
                faqItems: [
                  {
                    id: 'q4',
                    question: 'Can beginners join without prior experience?',
                    answer: 'Absolutely! We start right from letter sounds and basic phonics for absolute beginners.'
                  },
                  {
                    id: 'q5',
                    question: 'How can parents track progress?',
                    answer: 'Parents get dedicated dashboard access with weekly progress reports, attendance, and teacher feedback.'
                  },
                  {
                    id: 'q6',
                    question: 'What if we miss a scheduled class?',
                    answer: 'We provide easy class rescheduling options and access to class recording summaries so kids never lag behind.'
                  }
                ]
              }
            ]
          }}
        />
      </section>


      {/* ─── COOKIE BANNER ────────────────────────────── */}
      <AnimatePresence>
        {cookieBannerVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 inset-x-0 z-50 bg-[#1a1a2e] text-white p-4 sm:p-5 border-t border-slate-700 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold">
              <p className="text-slate-300 max-w-4xl leading-relaxed">
                We use cookies to enhance your experience, maintain your session, and analyze platform usage.{' '}
                <span className="text-amber-400 font-bold">Essential cookies</span> are technically necessary for the platform to function.{' '}
                <span className="text-amber-400 font-bold">Non-essential cookies</span> are used for analytics.
              </p>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => setCookieBannerVisible(false)}
                  className="px-4 py-2 border border-slate-600 hover:border-slate-400 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setCookieBannerVisible(false)}
                  className="px-5 py-2 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black rounded-xl text-xs transition cursor-pointer shadow-md"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── DEMO BOOKING MODAL ───────────────────────── */}
      <AnimatePresence>
        {demoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-[36px] border border-pink-200 max-w-md w-full relative shadow-2xl space-y-5"
            >
              <button
                onClick={() => setDemoModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2">
                <div className="text-4xl">🎁</div>
                <h3 className="text-2xl font-black text-slate-900">Book Free Trial Class</h3>
                <p className="text-xs text-slate-600 font-semibold">
                  Schedule a 1-on-1 trial class for your child with our certified educator.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDemoModalOpen(false);
                  alert('🎉 Demo booked! Our counsellor will contact you shortly.');
                }}
                className="space-y-3"
              >
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-1">Parent Name</label>
                  <input required type="text" placeholder="e.g. Sarah Spark"
                    className="w-full p-3 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-300" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-1">Phone / WhatsApp</label>
                  <input required type="tel" placeholder="+1 (555) 000-0000"
                    className="w-full p-3 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-300" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-1">Child Age</label>
                  <select className="w-full p-3 rounded-2xl border border-slate-200 text-xs font-bold bg-white focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <option>Age 3–4 (Junior Phonics)</option>
                    <option>Age 5–6 (Phonics & Reading)</option>
                    <option>Age 7–9 (Grammar & Hindi)</option>
                    <option>Age 10–12 (Advanced English & Math)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black text-sm rounded-2xl shadow-lg shadow-green-500/20 cursor-pointer transition"
                >
                  Confirm Free Booking 🚀
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
