import React, { useState } from 'react';
import { useCourses } from '../context/CourseContext';
import { CourseCard } from '../components/learning/CourseCard';
import { Search, ChevronDown, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CoursesPage = () => {
  const { courses, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useCourses();

  const categories = ['All', 'Phonics', 'Languages', 'STEM', 'Math', 'Reading', 'Coding'];

  const filteredCourses = courses.filter((c) => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAF9FF] text-slate-900 font-sans min-h-screen">
      
      {/* ── 1. HERO HEADER BANNER WITH VECTOR DOODLES ────────────────────── */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#FAF5F8] via-[#FAF9FF] to-white overflow-hidden border-b border-slate-100 text-center">
        
        {/* Background Vector Doodles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          
          {/* Left Lime Green Blob/Wing Accent */}
          <div className="absolute -top-12 -left-20 w-80 h-80 bg-[#bef264]/40 rounded-full blur-[100px] pointer-events-none" />

          {/* Paper Airplane Top Left */}
          <div className="absolute top-10 left-12 opacity-75 hidden sm:block">
            <div className="flex items-center gap-1 text-indigo-400">
              <span className="text-xs border-t-2 border-dashed border-indigo-300 w-12 inline-block" />
              <Send className="w-6 h-6 transform -rotate-12" />
            </div>
          </div>

          {/* Rocket Pencil Outline Top Right */}
          <div className="absolute top-12 right-16 opacity-75 hidden sm:block text-purple-400">
            <svg className="w-10 h-10 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
            </svg>
          </div>

          {/* Dot Matrix Grids */}
          <div className="absolute top-6 left-6 grid grid-cols-5 gap-2 opacity-30 hidden lg:grid">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            ))}
          </div>

          <div className="absolute top-8 right-6 grid grid-cols-5 gap-2 opacity-30 hidden lg:grid">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            ))}
          </div>

          <div className="absolute top-1/2 left-8 text-amber-400 text-2xl animate-bounce hidden sm:block">
            ⭐
          </div>
          <div className="absolute top-1/3 right-10 text-sky-400 text-2xl hidden sm:block">
            ✦
          </div>

        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          
          {/* Subtag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-[#7C3AED]">
            <span className="text-xs font-black tracking-widest uppercase">
              CURATED ACADEMIC PROGRAMS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
            Unleashing Potential with Our{' '}
            <span className="relative inline-block text-[#7C3AED]">
              Courses
              {/* Yellow Brush Underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3.5 text-amber-400 pointer-events-none"
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
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed pt-1">
            Personalized live 4:1 Zoom classes designed to build phonics fluency, Hindi mastery, and STEM logic for ages 3 to 12.
          </p>
        </div>
      </section>

      {/* ── 2. MAIN COURSES SECTION ───────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header Row: Title & Search/Dropdown */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1 text-left max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                Delightful &amp; Impactful Learning Programs
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                Discover research-backed programs tailored to nurture your child's growth in reading, speaking, and mathematical logic.
              </p>
            </div>

            {/* Search Input & Category Dropdown */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs pl-9 pr-4 py-2.5 rounded-full focus:outline-none focus:border-[#7C3AED] focus:bg-white shadow-xs transition"
                />
              </div>

              {/* Category Select Dropdown */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs px-4 py-2.5 pr-8 rounded-full shadow-xs cursor-pointer focus:outline-none focus:border-[#7C3AED] focus:bg-white transition"
                >
                  <option value="All">All Categories</option>
                  {categories.filter(c => c !== 'All').map(c => (
                    <option key={c} value={c}>{c} Program</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Category Filter Pills (Soft Rounded Buttons) */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-black transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#7C3AED] text-white shadow-md shadow-purple-200'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-purple-100 hover:text-[#7C3AED] border border-slate-200/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Courses Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-2">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
            ) : (
              <div className="col-span-full py-16 text-center text-slate-500 space-y-3 bg-[#FAF5F8] rounded-3xl border border-slate-200">
                <div className="text-5xl">🔍</div>
                <div className="text-lg font-black text-slate-900">No programs match your search or filter.</div>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="px-5 py-2.5 bg-[#7C3AED] hover:bg-purple-700 text-white text-xs font-black rounded-full shadow-sm transition cursor-pointer"
                >
                  Reset Filter &amp; Search
                </button>
              </div>
            )}
          </div>



        </div>
      </section>

    </div>
  );
};

export default CoursesPage;

