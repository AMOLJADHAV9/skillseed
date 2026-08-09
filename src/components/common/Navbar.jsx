import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { SkillSeedLogo } from './SkillSeedLogo';
import {
  ChevronDown, Menu, X, Search
} from 'lucide-react';

export const Navbar = () => {
  const { openAuthModal } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const courseDropdownItems = [
    { name: 'Phonics Courses', icon: '🔤', path: '/courses' },
    { name: 'Hindi Language', icon: '🇮🇳', path: '/courses' },
    { name: 'English Grammar', icon: '🇬🇧', path: '/courses' },
    { name: 'Math & Logic', icon: '🔢', path: '/courses' },
    { name: 'View All Courses', icon: '📚', path: '/courses' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses', hasDropdown: true },
    { name: 'Mentors', path: '/about' },
    { name: 'Community', path: '/games' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Logo with Colorful Sprout */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-2.5">
            {/* Multi-colored 4-leaf SVG sprout icon matching image */}
            <div className="w-10 h-10 flex items-center justify-center relative">
              <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
                {/* Top Left Green Leaf */}
                <path d="M18 18C18 11.5 12.5 6 6 6C6 12.5 11.5 18 18 18Z" fill="#10B981" />
                {/* Top Right Orange Leaf */}
                <path d="M18 18C18 11.5 23.5 6 30 6C30 12.5 24.5 18 18 18Z" fill="#F97316" />
                {/* Bottom Left Blue Leaf */}
                <path d="M18 18C18 24.5 12.5 30 6 30C6 23.5 11.5 18 18 18Z" fill="#3B82F6" />
                {/* Bottom Right Pink Leaf */}
                <path d="M18 18C18 24.5 23.5 30 30 30C30 23.5 24.5 18 18 18Z" fill="#EC4899" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Skill<span className="text-[#4F46E5]">Seed</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path !== '/' && location.pathname.startsWith(link.path));

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setCoursesDropdownOpen(true)}
                  onMouseLeave={() => setCoursesDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 py-1 ${
                      isActive ? 'text-slate-900 font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {coursesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-52 bg-white border border-slate-100 rounded-2xl shadow-xl z-50 py-2 overflow-hidden"
                      >
                        {courseDropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setCoursesDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-indigo-50 hover:text-[#4F46E5] transition"
                          >
                            <span className="text-base">{item.icon}</span>
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative flex flex-col items-center text-sm transition-all duration-200 py-1 ${
                  isActive ? 'text-slate-900 font-bold' : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] absolute -bottom-1" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Header Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Login Button */}
          <button
            onClick={() => openAuthModal('login')}
            className="px-6 py-2.5 border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm rounded-xl transition cursor-pointer hover:bg-slate-50"
          >
            Login
          </button>

          {/* Join for Free Button */}
          <button
            onClick={() => openAuthModal('signup')}
            className="px-6 py-2.5 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold text-sm rounded-xl transition cursor-pointer shadow-md shadow-indigo-200"
          >
            Join for Free
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center lg:hidden gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-11 h-11 flex items-center justify-center text-slate-500 hover:text-slate-900 rounded-xl transition cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center text-slate-700 bg-slate-100 rounded-xl cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Search Bar Popup */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-slate-50 border-b border-slate-200 px-4 py-3"
          >
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses, mentors, skills..."
                className="w-full bg-transparent text-sm text-slate-900 focus:outline-none placeholder-slate-400 h-11"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 min-h-[44px] px-2"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="p-5 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-4 min-h-[44px] text-sm font-semibold rounded-xl transition ${
                    location.pathname === link.path
                      ? 'bg-indigo-50 text-[#4F46E5] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3 border-t border-slate-100">
                <button
                  onClick={() => { setMobileMenuOpen(false); openAuthModal('login'); }}
                  className="w-full min-h-[44px] py-2.5 border border-slate-300 text-slate-800 font-bold text-sm rounded-xl cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); openAuthModal('signup'); }}
                  className="w-full min-h-[44px] py-2.5 bg-[#6366F1] text-white font-bold text-sm rounded-xl shadow-md cursor-pointer"
                >
                  Join for Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
