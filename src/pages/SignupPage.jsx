import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useGamification } from '../context/GamificationContext';
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  UserPlus,
  QrCode,
  Shield,
  ArrowLeft
} from 'lucide-react';

export const SignupPage = () => {
  const { login } = useAuth();
  const { triggerCelebration } = useGamification();
  const navigate = useNavigate();

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupGrade, setSignupGrade] = useState('Grade 1-2 (Ages 5-7)');
  const [selectedRole, setSelectedRole] = useState('student');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(signupEmail, signupPassword, selectedRole);
    triggerCelebration({
      title: '🎉 WELCOME TO SKILLSEED!',
      message: `Account created for ${signupName || 'Young Explorer'}! You earned +100 XP Welcome Bonus!`,
      icon: '🧑‍🚀',
      xpEarned: 100
    });
    navigate(`/dashboard/${selectedRole}`);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 flex items-center justify-center px-4 relative overflow-hidden bg-[#FAF5F8] text-slate-900 font-sans">
      
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-4 text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-black text-[#7C3AED] hover:bg-purple-50 transition uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] shadow-2xl w-full border border-slate-100 flex flex-col md:flex-row overflow-hidden text-left"
        >

          {/* ─── LEFT PANEL (BRAND & KID ILLUSTRATION) ───────────────── */}
          <div className="w-full md:w-5/12 bg-[#FAF9FF] p-7 sm:p-8 border-r border-slate-100 flex flex-col justify-between relative overflow-hidden space-y-6">
            
            {/* Top Brand Logo */}
            <div className="space-y-1">
              <Link to="/" className="inline-flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-emerald-400 to-purple-600 p-0.5 flex items-center justify-center shadow-xs">
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-black text-lg">
                    🌱
                  </div>
                </div>
                <div>
                  <span className="text-xl font-black tracking-tight text-slate-900 block leading-none">
                    Skill<span className="text-[#7C3AED]">Seed</span>
                  </span>
                  <span className="text-[8px] font-black text-[#10B981] uppercase tracking-widest block pt-0.5">
                    LEARNING &amp; GROWTH PLATFORM
                  </span>
                </div>
              </Link>
            </div>

            {/* Headline & Description */}
            <div className="space-y-2 z-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Start Your Quest at <br />
                <span className="text-[#7C3AED] relative inline-block">
                  SkillSeed!
                  <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-emerald-400 pointer-events-none" viewBox="0 0 100 12" fill="none">
                    <path d="M 2 8 C 30 2, 70 2, 98 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                🚀
              </h2>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Join thousands of curious learners today. Claim your free account &amp; +100 XP Welcome Bonus instantly!
              </p>
            </div>

            {/* Central Kid Illustration Graphic */}
            <div className="relative my-2 flex justify-center items-center z-10">
              
              <div className="absolute inset-0 bg-emerald-100/60 rounded-full blur-2xl transform scale-90 pointer-events-none" />

              <div className="relative w-48 sm:w-56 h-48 sm:h-56 flex items-center justify-center">
                <img
                  src="/images/Image.884b6ab91d3401e5785d-removebg-preview.png"
                  alt="Kid reading book"
                  className="max-w-full max-h-full object-contain drop-shadow-xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400';
                  }}
                />
              </div>

              {/* Floating ABC Blocks */}
              <div className="absolute top-4 left-0 p-2 bg-white rounded-xl shadow-md border border-slate-100 flex items-center gap-1 text-xs font-black">
                <span className="w-5 h-5 rounded-md bg-purple-500 text-white flex items-center justify-center">A</span>
                <span className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center">B</span>
                <span className="w-5 h-5 rounded-md bg-amber-500 text-white flex items-center justify-center">C</span>
              </div>

              {/* Floating Lightbulb */}
              <div className="absolute top-6 right-2 w-9 h-9 rounded-full bg-amber-100 border border-amber-200 text-amber-600 flex items-center justify-center shadow-md text-base">
                💡
              </div>

            </div>

            {/* Bottom Safety Banner */}
            <div className="bg-[#F0FDF4] border border-emerald-100 p-3.5 rounded-2xl flex items-center gap-3.5 z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-lg flex-shrink-0">
                🛡️
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-black text-slate-900">Safe. Secure. Trusted.</h4>
                <p className="text-[10px] text-slate-500 font-semibold leading-tight">
                  Your child's safety and privacy are our top priority.
                </p>
              </div>
            </div>

          </div>

          {/* ─── RIGHT PANEL (FORM & ROLE SELECTOR) ─────────────────── */}
          <div className="w-full md:w-7/12 p-7 sm:p-8 bg-white space-y-6 flex flex-col justify-between">
            
            <div className="space-y-5">
              
              {/* Mode Switcher Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#FAF5F8] border border-purple-100 rounded-2xl">
                <Link
                  to="/login"
                  className="py-2.5 px-4 text-xs font-black rounded-xl transition cursor-pointer flex items-center justify-center gap-2 text-slate-600 hover:bg-purple-100/60"
                >
                  <User className="w-4 h-4" /> Sign In (Login)
                </Link>

                <div
                  className="py-2.5 px-4 text-xs font-black rounded-xl transition flex items-center justify-center gap-2 bg-[#7C3AED] text-white shadow-md cursor-default"
                >
                  <UserPlus className="w-4 h-4" /> Create Free Account
                </div>
              </div>

              {/* ─── SELECT YOUR ROLE SECTION ─────────────────────────── */}
              <div className="space-y-2">
                <span className="text-[11px] font-black text-[#10B981] uppercase tracking-widest text-center block">
                  ✨ SELECT YOUR ROLE ✨
                </span>

                <div className="grid grid-cols-4 gap-2.5">
                  {[
                    { id: 'student', name: 'Student', icon: '🎓' },
                    { id: 'parent', name: 'Parent', icon: '👥' },
                    { id: 'teacher', name: 'Teacher', icon: '🏫' },
                    { id: 'admin', name: 'Admin', icon: '🛡️' },
                  ].map((r) => {
                    const isSelected = selectedRole === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setSelectedRole(r.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition cursor-pointer ${
                          isSelected
                            ? 'bg-purple-50/80 border-2 border-[#7C3AED] text-[#7C3AED] shadow-sm'
                            : 'bg-white border-slate-200 hover:border-purple-200 text-slate-700'
                        }`}
                      >
                        <span className="text-2xl mb-1">{r.icon}</span>
                        <span className="text-xs font-black capitalize">{r.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ─── SIGNUP FORM ────────────────────────────────────────── */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
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
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#7C3AED]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-1">Grade Level</label>
                    <select
                      value={signupGrade}
                      onChange={(e) => setSignupGrade(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#7C3AED] cursor-pointer"
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
                      placeholder="you@skillseed.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#7C3AED]"
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
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#7C3AED] hover:bg-purple-700 text-white font-black text-sm rounded-2xl shadow-lg shadow-purple-500/25 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Create Account &amp; Claim +100 XP 🚀</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* ─── SOCIAL LOGIN OPTIONS ─────────────────────────────── */}
              <div className="space-y-2.5 pt-1">
                <div className="relative flex items-center justify-center">
                  <div className="border-t border-slate-100 w-full" />
                  <span className="bg-white px-3 text-[11px] font-extrabold text-slate-400 absolute">
                    or continue with
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-1">
                  <button type="button" className="p-2.5 border border-slate-200 hover:border-purple-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition cursor-pointer">
                    <span className="text-sm font-black text-blue-500">G</span> Google
                  </button>

                  <button type="button" className="p-2.5 border border-slate-200 hover:border-purple-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition cursor-pointer">
                    <span className="text-sm font-black text-rose-500">❖</span> Microsoft
                  </button>

                  <button type="button" className="p-2.5 border border-slate-200 hover:border-purple-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition cursor-pointer">
                    <span className="text-sm font-black text-slate-900"></span> Apple
                  </button>

                  <button type="button" className="p-2.5 border border-slate-200 hover:border-purple-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition cursor-pointer">
                    <QrCode className="w-4 h-4 text-purple-600" /> QR Code
                  </button>
                </div>
              </div>

            </div>

            {/* ─── BOTTOM SECURITY FEATURE BOX ───────────────────────── */}
            <div className="bg-[#F8F7FF] border border-purple-100 p-4 rounded-2xl flex items-center justify-between gap-3 mt-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#7C3AED] flex items-center justify-center font-black text-base flex-shrink-0">
                  <Shield className="w-5 h-5 fill-purple-200 text-[#7C3AED]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-black text-[#7C3AED]">Your Data, Our Responsibility</h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-tight">
                    We use industry-standard security to protect your information and provide a safe learning environment.
                  </p>
                </div>
              </div>

              {/* Padlock Graphic */}
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-lg flex-shrink-0 shadow-md">
                🔒
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default SignupPage;
