import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useGamification } from '../context/GamificationContext';
import { Mail, Lock, User, Sparkles, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export const SignupPage = () => {
  const { login } = useAuth();
  const { triggerCelebration } = useGamification();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('Grade 1-2 (Ages 5-7)');
  const [selectedAvatar, setSelectedAvatar] = useState('🧑‍🚀');
  const [role, setRole] = useState('student');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, role);
    triggerCelebration({
      title: '🎉 WELCOME TO LEARN2READ!',
      message: `Account created for ${name || 'Young Explorer'}! You earned a +100 XP Welcome Bonus!`,
      icon: selectedAvatar,
      xpEarned: 100
    });
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen py-12 flex items-center justify-center px-4 relative overflow-hidden bg-[#FAF5F8] text-slate-900 font-sans">
      
      {/* Decorative Light Background Accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-[100px]" />

      <div className="max-w-xl w-full relative z-10">
        
        {/* Brand Header */}
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-none bg-white border-2 border-emerald-500 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-amber-50 flex items-center justify-center text-2xl">
                🍎
              </div>
            </div>
            <div className="text-left leading-tight">
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Learn<span className="text-[#C04DF7]">2</span>Read
              </span>
              <span className="text-[9px] uppercase font-black tracking-widest text-emerald-600 block">
                Phonics &amp; STEM Academy
              </span>
            </div>
          </Link>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Start Your Learning Quest!</h2>
          <p className="text-xs font-semibold text-slate-600 mt-1">Claim your +100 XP Welcome Bonus instantly</p>
        </div>

        {/* Signup Box (Square Shape) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 sm:p-8 rounded-none border border-slate-200 shadow-xl space-y-6 text-left"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">Student / Parent Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Leo Spark"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">Grade Level</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full p-3 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7] cursor-pointer"
                >
                  <option>Pre-K &amp; Kindergarten (Ages 3-4)</option>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1">Create Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]"
                />
              </div>
            </div>

            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-none flex items-center gap-2 text-emerald-800 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>100% Ad-Free, Kid-Safe &amp; COPPA Compliant Guarantee</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm rounded-none shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Claim Free Account &amp; +100 XP 🚀</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500">Already registered? </span>
            <Link to="/login" className="text-xs font-black text-[#C04DF7] hover:underline">
              Sign In Here
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
