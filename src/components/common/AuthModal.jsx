import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useGamification } from '../../context/GamificationContext';
import { X, Mail, Lock, User, ShieldCheck, ArrowRight } from 'lucide-react';

export const AuthModal = () => {
  const { authModalOpen, authModalMode, closeAuthModal, setAuthModalMode, login, roles } = useAuth();
  const { triggerCelebration } = useGamification();
  const navigate = useNavigate();

  // Login Form States
  const [loginEmail, setLoginEmail] = useState('leo@skillseed.com');
  const [loginPassword, setLoginPassword] = useState('password123');
  const [selectedRole, setSelectedRole] = useState('student');

  // Signup Form States
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupGrade, setSignupGrade] = useState('Grade 1-2 (Ages 5-7)');
  const [selectedAvatar, setSelectedAvatar] = useState('🧑‍🚀');

  const avatars = ['🧑‍🚀', '🦖', '🤖', '🦄', '🧙‍♂️', '🦊'];

  if (!authModalOpen) return null;

  const handleDemoFill = (roleId) => {
    setSelectedRole(roleId);
    if (roleId === 'student') setLoginEmail('leo@skillseed.com');
    if (roleId === 'parent') setLoginEmail('marcus.parent@gmail.com');
    if (roleId === 'teacher') setLoginEmail('sarah.spark@skillseed.edu');
    if (roleId === 'admin') setLoginEmail('admin@skillseed.com');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword, selectedRole);
    closeAuthModal();
    navigate(`/dashboard/${selectedRole}`);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    login(signupEmail, signupPassword, 'student');
    triggerCelebration({
      title: '🎉 WELCOME TO LEARN2READ!',
      message: `Account created for ${signupName || 'Young Explorer'}! You earned +100 XP Welcome Bonus!`,
      icon: selectedAvatar,
      xpEarned: 100
    });
    closeAuthModal();
    navigate(`/dashboard/student`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="bg-white rounded-none border-2 border-purple-200 shadow-2xl max-w-md w-full relative p-6 sm:p-7 text-left my-8"
        >
          {/* Close Button */}
          <button
            onClick={closeAuthModal}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 rounded-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Brand Logo */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <div className="w-10 h-10 rounded-none bg-white border-2 border-emerald-500 shadow-sm flex items-center justify-center">
                <div className="w-full h-full bg-amber-50 flex items-center justify-center text-xl">
                  🍎
                </div>
              </div>
              <div className="text-left leading-tight">
                <span className="text-xl font-black tracking-tight text-slate-900">
                  Learn<span className="text-[#C04DF7]">2</span>Read
                </span>
                <span className="text-[8px] uppercase font-black tracking-widest text-emerald-600 block">
                  Phonics &amp; STEM Academy
                </span>
              </div>
            </div>
          </div>

          {/* Mode Selector Tabs (LOGIN vs SIGNUP) */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-[#FAF5F8] border border-purple-100 rounded-none mb-5">
            <button
              onClick={() => setAuthModalMode('login')}
              className={`py-2 text-xs font-black rounded-none transition cursor-pointer ${
                authModalMode === 'login'
                  ? 'bg-[#C04DF7] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#C04DF7]'
              }`}
            >
              Sign In (Login)
            </button>
            <button
              onClick={() => setAuthModalMode('signup')}
              className={`py-2 text-xs font-black rounded-none transition cursor-pointer ${
                authModalMode === 'signup'
                  ? 'bg-[#C04DF7] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#C04DF7]'
              }`}
            >
              Create Free Account
            </button>
          </div>

          {/* ────────────────── MODE 1: LOGIN ────────────────── */}
          {authModalMode === 'login' ? (
            <div className="space-y-4">
              
              {/* Role Switcher Pills */}
              <div>
                <label className="block text-[11px] font-black text-[#C04DF7] mb-1.5 uppercase tracking-wider text-center">
                  Select Perspective Role
                </label>
                <div className="grid grid-cols-4 gap-1 p-1 bg-slate-50 border border-slate-200 rounded-none">
                  {roles.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => handleDemoFill(r.id)}
                      className={`flex flex-col items-center py-2 px-1 rounded-none text-xs font-black transition cursor-pointer ${
                        selectedRole === r.id
                          ? 'bg-[#C04DF7] text-white shadow-sm'
                          : 'text-slate-600 hover:bg-purple-50'
                      }`}
                    >
                      <span className="text-base">{r.icon}</span>
                      <span className="text-[10px] capitalize mt-0.5">{r.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-black text-slate-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-black text-slate-700">Password</label>
                    <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[10px] font-extrabold text-[#C04DF7] hover:underline">
                      Forgot?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#C04DF7] hover:bg-purple-700 text-white font-black text-xs rounded-none shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Sign In to {selectedRole.toUpperCase()} Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* 1-Click Demo Fill Shortcuts */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block text-center">
                  ⚡ 1-Click Demo Fill
                </span>
                <div className="grid grid-cols-4 gap-1">
                  {roles.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => handleDemoFill(r.id)}
                      className="py-1 px-1 bg-slate-50 hover:bg-purple-50 border border-slate-200 text-[10px] font-black text-slate-700 rounded-none cursor-pointer truncate"
                    >
                      Fill {r.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* ────────────────── MODE 2: SIGNUP ────────────────── */
            <div className="space-y-4">
              
              {/* Avatar Selector */}
              <div>
                <label className="block text-[11px] font-black text-[#C04DF7] uppercase tracking-wider mb-1.5">
                  Choose Explorer Avatar
                </label>
                <div className="grid grid-cols-6 gap-1.5">
                  {avatars.map((av) => (
                    <button
                      key={av}
                      type="button"
                      onClick={() => setSelectedAvatar(av)}
                      className={`h-11 text-xl rounded-none flex items-center justify-center transition border cursor-pointer ${
                        selectedAvatar === av
                          ? 'bg-[#C04DF7] border-[#C04DF7] text-white shadow-sm'
                          : 'bg-slate-50 border-slate-200 hover:bg-purple-50'
                      }`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-1">Student / Parent Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Leo Spark"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-1">Grade Level</label>
                    <select
                      value={signupGrade}
                      onChange={(e) => setSignupGrade(e.target.value)}
                      className="w-full p-2 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7] cursor-pointer"
                    >
                      <option>Pre-K (Ages 3-4)</option>
                      <option>Grade 1-2 (Ages 5-7)</option>
                      <option>Grade 3-4 (Ages 8-9)</option>
                      <option>Grade 5+ (Ages 10-12)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="password"
                      required
                      placeholder="At least 6 characters"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]"
                    />
                  </div>
                </div>

                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-none flex items-center gap-2 text-emerald-800 text-[11px] font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Kid-Safe &amp; COPPA Compliant Guarantee</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-black text-xs rounded-none shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Claim Free Account &amp; +100 XP 🚀</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
