import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  BookOpen,
  Globe,
  Users,
  Send
} from 'lucide-react';
import { MOCK_COURSES } from '../../data/mockCourses';

export const PopularProgramsSection = () => {
  const coursesData = [
    {
      ...MOCK_COURSES[0],
      themeColor: 'purple',
      badgeBg: 'bg-[#F3E8FF] text-[#8B5CF6]',
      categoryColor: 'text-[#8B5CF6]',
      buttonBg: 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] shadow-purple-200/80',
      categoryIcon: BookOpen,
    },
    {
      ...MOCK_COURSES[1],
      themeColor: 'orange',
      badgeBg: 'bg-[#FEF3C7] text-[#D97706]',
      categoryColor: 'text-[#D97706]',
      buttonBg: 'bg-gradient-to-r from-[#F97316] to-[#EA580C] shadow-orange-200/80',
      categoryIcon: BookOpen,
    },
    {
      ...MOCK_COURSES[2],
      themeColor: 'green',
      badgeBg: 'bg-[#DCFCE7] text-[#16A34A]',
      categoryColor: 'text-[#16A34A]',
      buttonBg: 'bg-gradient-to-r from-[#22C55E] to-[#16A34A] shadow-green-200/80',
      categoryIcon: Globe,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFBFF] relative overflow-hidden text-slate-900 font-sans border-t border-purple-100/60">
      
      {/* Background ambient light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-100/50 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-pink-100/50 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ─── HEADER SECTION WITH DOODLES & UNDERLINE ───────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
          
          {/* Top Left Paper Airplane Doodle */}
          <motion.div
            animate={{ y: [-4, 6, -4], rotate: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-8 -left-4 sm:-left-10 opacity-80 text-indigo-400 hidden sm:block pointer-events-none"
          >
            <div className="flex items-center gap-1">
              <span className="text-xs border-t-2 border-dashed border-indigo-300 w-8 inline-block" />
              <Send className="w-6 h-6 transform -rotate-12" />
            </div>
          </motion.div>

          {/* Doodles Right of Header */}
          <div className="absolute -top-4 right-1/3 flex items-center gap-3 pointer-events-none hidden lg:flex">
            <img src="/svg/bachelor-hat-svgrepo-com.svg" alt="Graduation Cap" className="w-10 h-10 object-contain drop-shadow-sm" />
            <img src="/svg/reagent-bottle-svgrepo-com.svg" alt="STEM Bottle" className="w-9 h-9 object-contain drop-shadow-sm" />
          </div>

          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#8B5CF6] uppercase tracking-widest">
              <span>OUR POPULAR PROGRAMS</span>
              <span className="text-amber-400 text-sm">✨</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
              Interactive Phonics &amp;{' '}
              <span className="relative inline-block text-[#8B5CF6]">
                STEM Classes
                {/* Yellow Brush Underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3 text-amber-400 pointer-events-none"
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

            <p className="text-sm sm:text-base text-slate-500 font-medium pt-1 leading-relaxed">
              Designed to build reading fluency, creative problem-solving, and confidence.
            </p>
          </div>

          {/* Top Right Action Button */}
          <div className="self-start md:self-auto flex-shrink-0">
            <Link to="/courses">
              <button className="px-6 py-2.5 rounded-full border-2 border-[#8B5CF6] text-[#8B5CF6] font-bold text-xs sm:text-sm hover:bg-purple-50 transition flex items-center gap-2 cursor-pointer shadow-sm">
                <span>View All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

        </div>

        {/* ─── 3 COURSE CARDS GRID ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => {
            const CatIcon = course.categoryIcon;
            return (
              <motion.div
                key={course.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                className="group bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/80 overflow-hidden flex flex-col justify-between text-left cursor-pointer transition-all"
              >
                {/* Top Image Frame with Rounded Top Corners */}
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden rounded-t-[32px]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top-Left Category Badge (Rounded White Pill) */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-bold shadow-md border border-white/80 flex items-center gap-1.5">
                    <CatIcon className={`w-3.5 h-3.5 ${course.categoryColor}`} />
                    <span className={course.categoryColor}>{course.category}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    
                    {/* Level Pill Badge & Age Group */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${course.badgeBg}`}>
                        <span className="text-[8px]">●</span>
                        <span>{course.difficulty || 'Beginner'}</span>
                      </span>

                      <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        Age: {course.ageGroup || '3-8 Yrs'}
                      </span>
                    </div>

                    {/* Title */}
                    <Link to={`/courses/${course.id}`}>
                      <h3 className="text-lg font-black text-[#0F172A] group-hover:text-[#8B5CF6] line-clamp-1 leading-snug transition pt-1">
                        {course.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-500 font-medium line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Footer Rating & Gradient Pill Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-black text-slate-800 flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{course.rating || '4.9'}</span>
                    </span>
                    
                    <Link to={`/courses/${course.id}`}>
                      <button className={`px-5 py-2.5 ${course.buttonBg} text-white font-bold text-xs rounded-full transition-all duration-200 hover:scale-105 flex items-center gap-1.5 cursor-pointer shadow-md`}>
                        <span>View Course</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PopularProgramsSection;
