import React, { useState } from 'react';
import { useCourses } from '../context/CourseContext';
import { CourseCard } from '../components/learning/CourseCard';
import { Search, ChevronDown, BookOpen, Sparkles } from 'lucide-react';

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
    <div className="bg-[#FAF5F8] text-slate-900 font-sans min-h-screen">
      
      {/* ── Top Soft Pink Hero Header Banner ────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#FDE8F0] via-[#FAF5F8] to-[#FCE6EE] py-14 border-b border-pink-100 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-black text-[#C04DF7] uppercase tracking-widest block">CURATED ACADEMIC PROGRAMS</span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Unleashing Potential with Our Courses
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-xl mx-auto leading-relaxed">
            Personalized live 4:1 Zoom classes designed to build phonics fluency, Hindi mastery, and STEM logic for ages 3 to 12.
          </p>
        </div>
      </section>

      {/* ── Main Section ─────────────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Headline, Search & Dropdown Filter Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-1.5 text-left max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Delightful & Impactful Learning Programs
              </h2>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                Discover research-backed programs tailored to nurture your child's growth in reading, speaking, and mathematical logic.
              </p>
            </div>

            {/* Search Input & Category Dropdown */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs pl-9 pr-4 py-2.5 rounded-none focus:outline-none focus:border-[#C04DF7]"
                />
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs px-4 py-2.5 pr-8 rounded-none shadow-sm cursor-pointer focus:outline-none focus:border-[#C04DF7]"
                >
                  <option value="All">All Categories</option>
                  {categories.filter(c => c !== 'All').map(c => (
                    <option key={c} value={c}>{c} Program</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Category Filter Pills (Square Tabs) */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-none text-xs font-black transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C04DF7] text-white shadow-md'
                    : 'bg-slate-50 text-slate-600 hover:bg-purple-50 border border-slate-200'
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
              <div className="col-span-full py-16 text-center text-slate-500 space-y-3 bg-[#FAF5F8] rounded-none border border-slate-200">
                <div className="text-5xl">🔍</div>
                <div className="text-lg font-black text-slate-900">No programs match your search or filter.</div>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="px-5 py-2.5 bg-[#C04DF7] hover:bg-purple-700 text-white text-xs font-black rounded-none shadow-sm transition cursor-pointer"
                >
                  Reset Filter & Search
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
