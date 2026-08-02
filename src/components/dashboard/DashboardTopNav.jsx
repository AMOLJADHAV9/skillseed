import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useGamification } from '../../context/GamificationContext';
import { useCourses } from '../../context/CourseContext';
import { Search, Sparkles, Coins, ShieldCheck } from 'lucide-react';

export const DashboardTopNav = ({ title, subtitle }) => {
  const { role, user } = useAuth();
  const { xp, coins, streak } = useGamification();
  const { searchQuery, setSearchQuery } = useCourses();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
      
      {/* Greeting Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
          {title || `Welcome back, ${user.name}!`}
          <span className="text-2xl">👋</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-bold mt-0.5">
          {subtitle || `${user.grade} • Active Study Streak: ${streak} Days`}
        </p>
      </div>

      {/* Controls Right */}
      <div className="flex items-center gap-3 flex-wrap">
        
        {/* Search Bar */}
        <div className="relative flex-1 sm:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses, lessons, quizzes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-2xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition shadow-sm"
          />
        </div>

        {/* XP Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-700 font-black text-xs">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>{xp} XP</span>
        </div>

        {/* Coins Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 font-black text-xs">
          <Coins className="w-4 h-4 text-amber-600" />
          <span>{coins} Coins</span>
        </div>

        {/* Role Badge */}
        <div className="px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-xl text-purple-700 font-black text-xs capitalize flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
          <span>{role}</span>
        </div>

      </div>
    </div>
  );
};
