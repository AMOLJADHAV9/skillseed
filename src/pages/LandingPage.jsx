import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialProofSection } from '../components/marketing/SocialProofSection';
import { GrowthSection } from '../components/marketing/GrowthSection';
import { HeroCarousel } from '../components/marketing/HeroCarousel';
import { SkillSeedHero } from '../components/marketing/SkillSeedHero';
import { KidsPhotoGallery } from '../components/marketing/KidsPhotoGallery';
import { WhyPhonicsSection } from '../components/marketing/WhyPhonicsSection';
import { WhySkillSeedSection } from '../components/marketing/WhySkillSeedSection';
import { PopularProgramsSection } from '../components/marketing/PopularProgramsSection';
import { HowItWorksSection } from '../components/marketing/HowItWorksSection';
import { ParentsTestimonialSection } from '../components/marketing/ParentsTestimonialSection';
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

      {/* Floating "Book Demo" Button (Responsive: Bottom-Right Pill on Mobile, Right Vertical Badge on Desktop) */}
      <div className="fixed right-3 bottom-4 lg:bottom-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-40">
        <button
          onClick={() => setDemoModalOpen(true)}
          className="bg-white border-2 border-purple-400 text-purple-700 font-black text-xs px-3.5 py-2.5 lg:py-4 lg:px-2.5 rounded-full lg:rounded-l-2xl lg:rounded-r-none shadow-2xl flex flex-row lg:flex-col items-center gap-1.5 cursor-pointer hover:bg-purple-50 transition min-h-[44px]"
        >
          <span>Book Demo</span>
          <span className="text-amber-400 text-sm">⭐</span>
        </button>
      </div>

      {/* ─── SKILLSEED REDESIGNED HERO SECTION ──────────────────────── */}
      <SkillSeedHero />

      {/* ─── KIDS PHOTO GALLERY GRID (NEW) ────────────── */}
      <KidsPhotoGallery />

      {/* ─── WHY CHOOSE OUR PHONICS CLASSES SECTION ────── */}
      <WhyPhonicsSection />

      {/* ─── GROWTH & ANIMATED STATS COUNTER SECTION ────── */}
      <GrowthSection />

      {/* ─── SOCIAL PROOF ──────────────────────────────── */}
      <SocialProofSection />

      {/* ─── WHY SKILLSEED FEATURES SECTION ────────────── */}
      <WhySkillSeedSection />

      {/* ─── FEATURED COURSES (OUR POPULAR PROGRAMS) ─────────────── */}
      <PopularProgramsSection />

      {/* ─── HOW IT WORKS SECTION ─────────────────────────────── */}
      <HowItWorksSection onBookDemo={() => setDemoModalOpen(true)} />

      {/* ─── PARENTS TESTIMONIAL SECTION (VOICES OF LEARN2READ PARENTS) ─ */}
      <ParentsTestimonialSection />

      {/* ─── TESTIMONIALS SCROLLER ─────────────────────── */}
      <TestimonialV2 />

      {/* ─── FAQ SECTION ──────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF5F8] to-white border-t border-pink-100 overflow-hidden">
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

      {/* ─── COOKIE BANNER (RESPONSIVE MOBILE REDESIGN) ────────────────────────────── */}
      <AnimatePresence>
        {cookieBannerVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 inset-x-0 z-50 bg-[#1a1a2e] text-white p-4 sm:p-5 border-t border-slate-700 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 text-xs font-semibold">
              <p className="text-slate-300 max-w-4xl leading-relaxed text-center md:text-left">
                We use cookies to enhance your experience, maintain your session, and analyze platform usage.{' '}
                <span className="text-amber-400 font-bold">Essential cookies</span> are technically necessary for the platform to function.{' '}
                <span className="text-amber-400 font-bold">Non-essential cookies</span> are used for analytics.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-shrink-0">
                <button
                  onClick={() => setCookieBannerVisible(false)}
                  className="px-4 py-2.5 border border-slate-600 hover:border-slate-400 text-white rounded-xl text-xs font-bold transition cursor-pointer min-h-[44px]"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setCookieBannerVisible(false)}
                  className="px-5 py-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-black rounded-xl text-xs transition cursor-pointer shadow-md min-h-[44px]"
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
