import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export const CourseCard = ({ course }) => {
  const getLevelBadge = (difficulty) => {
    const diff = difficulty?.toLowerCase() || '';
    if (diff.includes('advanced')) return 'bg-[#C04DF7] text-white';
    if (diff.includes('intermediate')) return 'bg-amber-500 text-white';
    return 'bg-emerald-500 text-white';
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200 }}
      className="group bg-white rounded-none border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col text-left cursor-pointer"
    >
      {/* Top Image Frame (High Definition Real Child Visuals) */}
      <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
        {course.image ? (
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-tr ${course.thumbnailBg || 'from-indigo-500 to-purple-600'} p-6 flex items-center justify-center text-6xl`}>
            {course.icon || '📖'}
          </div>
        )}

        {/* Category Pill (Square Shape) */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-none px-3 py-1 text-xs font-black text-[#C04DF7] shadow-sm border border-white/70">
          {course.category}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          
          {/* Level & Age Group Tags */}
          <div className="flex items-center justify-between">
            <span className={`px-2.5 py-0.5 rounded-none text-[10px] font-black uppercase tracking-wider ${getLevelBadge(course.difficulty)}`}>
              {course.difficulty || 'Beginner'}
            </span>
            <span className="text-[11px] font-extrabold text-slate-500">
              Age: {course.ageGroup || '3-8 Yrs'}
            </span>
          </div>

          {/* Title */}
          <Link to={`/courses/${course.id}`}>
            <h3 className="text-base font-black text-slate-900 group-hover:text-[#C04DF7] line-clamp-1 leading-snug transition">
              {course.title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-xs text-slate-600 font-semibold line-clamp-2 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Bottom Metadata & Square Action Button */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-black text-amber-500 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400" /> {course.rating || '4.9'}
          </span>
          <Link to={`/courses/${course.id}`}>
            <button className="px-3.5 py-1.5 bg-[#C04DF7] hover:bg-purple-700 text-white font-black text-xs rounded-none transition flex items-center gap-1 cursor-pointer">
              <span>View Course</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
