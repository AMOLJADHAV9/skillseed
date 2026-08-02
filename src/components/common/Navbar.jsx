import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useGamification } from '../../context/GamificationContext';
import {
  Flame, Sparkles, ChevronDown, Menu, X,
  BookOpen, GraduationCap, Phone
} from 'lucide-react';

export const Navbar = () => {
  const { role, switchRole, roles, openAuthModal } = useAuth();
  const { xp, streak } = useGamification();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  const courseDropdownItems = [
    { name: 'Phonics Courses', icon: '🔤', path: '/courses' },
    { name: 'Hindi Language', icon: '🇮🇳', path: '/courses' },
    { name: 'English Grammar', icon: '🇬🇧', path: '/courses' },
    { name: 'Math & Logic', icon: '🔢', path: '/courses' },
    { name: 'View All Courses', icon: '📚', path: '/courses' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Courses',
      path: '/courses',
      hasDropdown: true,
    },
    { name: 'Kids Arcade 🎮', path: '/games' },
    { name: 'About Us', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Careers', path: '/careers' },
    { name: 'Enquiry', path: '/contact' },
  ];

  const currentRoleObj = roles.find((r) => r.id === role) || roles[0];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#C04DF7] text-white text-center py-2 text-xs font-bold tracking-wide hidden md:block">
        🎉 Book a <span className="underline cursor-pointer font-black">FREE Trial Class</span> today — Limited slots available! &nbsp;|&nbsp; 🌍 Serving 35+ countries worldwide
      </div>

      <header className="sticky top-0 z-50 w-full glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-3">

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-11 h-11 rounded-full bg-white border-2 border-emerald-500 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-amber-50 flex items-center justify-center text-xl">
                🍎
              </div>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-0">
                Skill<span className="text-[#C04DF7]">Seed</span>
              </span>
              <span className="text-[8px] uppercase font-black tracking-widest text-emerald-600 block">
                Phonics &amp; STEM Academy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
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
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-bold rounded-none transition-all duration-200 ${
                        isActive
                          ? 'text-[#C04DF7] bg-purple-50'
                          : 'text-slate-700 hover:text-[#C04DF7] hover:bg-purple-50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {coursesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-200 rounded-none shadow-xl z-50 py-2 overflow-hidden"
                        >
                          {courseDropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => setCoursesDropdownOpen(false)}
                              className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-purple-50 hover:text-[#C04DF7] transition"
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
                  className={`relative px-3 py-2 text-sm font-bold rounded-none transition-all duration-200 ${
                    isActive
                      ? 'text-[#C04DF7] bg-purple-50'
                      : 'text-slate-700 hover:text-[#C04DF7] hover:bg-purple-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-2">

            {/* Signup */}
            <button
              onClick={() => openAuthModal('signup')}
              className="px-4 py-2 border-2 border-[#F59E0B] hover:bg-amber-50 text-slate-900 font-black text-sm rounded-none transition cursor-pointer"
            >
              Signup
            </button>

            {/* Login */}
            <button
              onClick={() => openAuthModal('login')}
              className="px-5 py-2 bg-[#C04DF7] hover:bg-[#b03de5] text-white font-black text-sm rounded-none transition cursor-pointer shadow-md shadow-purple-500/20 flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4" />
              Login
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <Link to="/contact">
              <button className="p-2 text-[#C04DF7] bg-purple-50 border border-purple-200 rounded-none">
                <Phone className="w-4 h-4" />
              </button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 bg-white border border-slate-200 rounded-none shadow-sm cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
            >
              <div className="p-5 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-none transition ${
                      location.pathname === link.path
                        ? 'bg-purple-50 text-[#C04DF7]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 flex items-center gap-3 border-t border-slate-100 mt-3">
                  <button
                    onClick={() => { setMobileMenuOpen(false); openAuthModal('signup'); }}
                    className="flex-1 py-2.5 border-2 border-amber-400 text-slate-900 font-black text-sm rounded-none cursor-pointer"
                  >
                    Signup
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); openAuthModal('login'); }}
                    className="flex-1 py-2.5 bg-[#C04DF7] text-white font-black text-sm rounded-none shadow-md cursor-pointer"
                  >
                    Login 🚀
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
