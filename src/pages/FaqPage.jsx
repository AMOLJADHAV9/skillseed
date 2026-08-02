import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  RefreshCw,
  XCircle,
  FileText,
  CreditCard,
  Mail,
  BookOpen,
  Users,
  Clock,
  Star,
  Globe,
  Headphones,
} from 'lucide-react';

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    icon: Heart,
    color: 'bg-rose-100 text-rose-500',
    question: 'Is there a free trial available?',
    answer:
      'Yes! You can book a free no-obligation trial class for your child. Our friendly counsellors will work with you to choose the right course level and batch size.',
  },
  {
    icon: RefreshCw,
    color: 'bg-blue-100 text-blue-500',
    question: 'Can I change my plan later?',
    answer:
      'Of course. Our pricing scales with your child\'s progress. You can switch courses, upgrade or downgrade your batch size at any time — just contact our team.',
  },
  {
    icon: XCircle,
    color: 'bg-slate-100 text-slate-500',
    question: 'What is your cancellation policy?',
    answer:
      'We understand that things change. You can cancel your enrollment at any time and we\'ll process a refund for any unused classes.',
  },
  {
    icon: FileText,
    color: 'bg-amber-100 text-amber-500',
    question: 'What learning materials are provided?',
    answer:
      'All learning materials — workbooks, activity sheets, flashcards and game resources — are included in your enrollment. Physical worksheets are emailed as printable PDFs.',
  },
  {
    icon: CreditCard,
    color: 'bg-indigo-100 text-indigo-500',
    question: 'How does billing work?',
    answer:
      'Plans are billed on a monthly or per-course basis. You can choose between 1-to-1 or group batch sessions with flexible payment options.',
  },
  {
    icon: Mail,
    color: 'bg-emerald-100 text-emerald-500',
    question: 'How do I change my account email?',
    answer:
      'You can update your email address or parent contact details from your account settings page, or reach out to our support team for immediate assistance.',
  },
  {
    icon: BookOpen,
    color: 'bg-purple-100 text-purple-500',
    question: 'What age groups do you cater to?',
    answer:
      'We offer programs for children aged 3–12 years across Phonics, Hindi Language, English Grammar, and Math — each tailored to the child\'s current level.',
  },
  {
    icon: Users,
    color: 'bg-pink-100 text-pink-500',
    question: 'What is the class size?',
    answer:
      'We keep class sizes small — maximum 4:1 student-to-teacher ratio for group sessions, or fully personalised 1-on-1 sessions for faster progress.',
  },
  {
    icon: Globe,
    color: 'bg-cyan-100 text-cyan-500',
    question: 'Do you serve students outside India?',
    answer:
      'Yes! We serve over 10,000 students across 35+ countries including UAE, USA, Canada, Australia, Qatar, Belgium, and the UK. All classes are fully online.',
  },
  {
    icon: Clock,
    color: 'bg-orange-100 text-orange-500',
    question: 'How long are the online classes?',
    answer:
      '1-to-1 sessions run 30–35 minutes and group classes 40–60 minutes. Sessions are conducted live on Zoom with interactive activities throughout.',
  },
  {
    icon: Star,
    color: 'bg-yellow-100 text-yellow-500',
    question: 'What qualifications do teachers have?',
    answer:
      'All our educators hold advanced qualifications in child-centric teaching methods and have a minimum of 2 years\' teaching experience with young learners.',
  },
  {
    icon: Headphones,
    color: 'bg-violet-100 text-violet-500',
    question: 'Is there live support available?',
    answer:
      'Yes — our parent support team is available Monday to Saturday, 9am to 6pm IST via WhatsApp, email, or live chat on our website.',
  },
];

// ─── Team Avatars for CTA ─────────────────────────────────────────────────────
const teamAvatars = [
  { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100', alt: 'Varshika Jain', size: 'w-12 h-12', z: 'z-20' },
  { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100', alt: 'Dr. Priya Mehta', size: 'w-14 h-14', z: 'z-30' },
  { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100', alt: 'Anita Sharma', size: 'w-12 h-12', z: 'z-20' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export const FaqPage = () => {
  return (
    <section className="bg-[#FAF5F8] py-16 md:py-24 font-sans">

      {/* ── Background blobs ─────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full bg-purple-200 opacity-20 blur-[120px]" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] rounded-full bg-pink-200 opacity-20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl flex flex-col items-center text-center mb-14 md:mb-20"
        >
          <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest mb-3">
            Help Center
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-slate-500 font-semibold md:text-lg max-w-xl leading-relaxed">
            Everything you need to know about our phonics classes, billing, and how to get your child started.
          </p>
        </motion.div>

        {/* ── FAQ Icon Grid ───────────────────────────────── */}
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-14 justify-items-center">
          {faqs.map((faq, i) => {
            const Icon = faq.icon;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.055, duration: 0.4 }}
                className="flex max-w-sm flex-col items-center text-center"
              >
                {/* Featured Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${faq.color} flex-shrink-0`}>
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>

                <dt className="mt-5 text-base font-black text-slate-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm text-slate-500 font-semibold leading-relaxed">
                  {faq.answer}
                </dd>
              </motion.div>
            );
          })}
        </dl>

        {/* ── Still Have Questions? CTA Card ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 md:mt-20 flex flex-col items-center gap-6 md:gap-8 rounded-3xl bg-white border border-slate-100 shadow-lg px-6 py-10 md:px-10 md:py-12 text-center"
        >
          {/* Overlapping team avatar stack */}
          <div className="flex items-end -space-x-4">
            {teamAvatars.map((av, i) => (
              <div
                key={av.alt}
                className={`${av.size} ${av.z} rounded-full overflow-hidden ring-[2.5px] ring-white shadow-md`}
              >
                <img src={av.src} alt={av.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-black text-slate-900">
              Still have questions?
            </h3>
            <p className="text-sm md:text-base text-slate-500 font-semibold max-w-md mx-auto leading-relaxed">
              Can't find the answer you're looking for? Please chat to our friendly team — we're happy to help.
            </p>
          </div>

          <Link to="/contact">
            <button className="px-8 py-3.5 bg-[#C04DF7] hover:bg-[#b03de5] text-white font-black text-sm rounded-2xl shadow-xl shadow-purple-500/20 transition cursor-pointer">
              Get in Touch 🚀
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
