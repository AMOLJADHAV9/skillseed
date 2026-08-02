import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export const LoginPage = () => {
  const { login, roles } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('leo@skillseed.com');
  const [password, setPassword] = useState('password123');
  const [selectedRole, setSelectedRole] = useState('student');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, selectedRole);
    navigate(`/dashboard/${selectedRole}`);
  };

  const handleDemoFill = (roleId) => {
    setSelectedRole(roleId);
    if (roleId === 'student') setEmail('leo@skillseed.com');
    if (roleId === 'parent') setEmail('marcus.parent@gmail.com');
    if (roleId === 'teacher') setEmail('sarah.spark@skillseed.edu');
    if (roleId === 'admin') setEmail('admin@skillseed.com');
  };

  return (
    <div className="min-h-screen py-16 flex items-center justify-center px-4 relative overflow-hidden bg-[#FAF5F8] text-slate-900 font-sans">
      
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-[100px]" />

      <div className="max-w-md w-full relative z-10">
        
        {/* Brand Logo Header */}
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center gap-3 mb-3">
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
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Welcome Back Explorer!</h2>
          <p className="text-xs text-slate-600 font-semibold mt-1">Sign in to resume your learning quests &amp; earn XP</p>
        </div>

        {/* Role Switcher Pills (Square Shape) */}
        <div className="mb-5">
          <label className="block text-xs font-black text-[#C04DF7] mb-2 uppercase tracking-wider text-center">
            Select Your Perspective Role
          </label>
          <div className="grid grid-cols-4 gap-1 p-1 bg-white rounded-none border border-slate-200 shadow-sm">
            {roles.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => handleDemoFill(r.id)}
                className={`flex flex-col items-center py-2.5 px-1 rounded-none text-xs font-black transition cursor-pointer ${
                  selectedRole === r.id
                    ? 'bg-[#C04DF7] text-white shadow-md'
                    : 'text-slate-600 hover:bg-purple-50 hover:text-[#C04DF7]'
                }`}
              >
                <span className="text-base">{r.icon}</span>
                <span className="text-[10px] capitalize mt-0.5">{r.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Login Form Box (Square Shape) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-7 sm:p-8 rounded-none border border-slate-200 shadow-xl space-y-5 text-left"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-black text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-black text-slate-700">Password</label>
                <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[10px] font-extrabold text-[#C04DF7] hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-none bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C04DF7]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-600">
                <input type="checkbox" defaultChecked className="rounded-none text-[#C04DF7] focus:ring-0 cursor-pointer" />
                <span>Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#C04DF7] hover:bg-purple-700 text-white font-black text-xs sm:text-sm rounded-none shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Sign In to {selectedRole.toUpperCase()} Hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* 1-Click Demo Fill Shortcuts */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block text-center">
              ⚡ 1-Click Demo Fill
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {roles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => handleDemoFill(r.id)}
                  className="py-1.5 px-1 bg-slate-50 hover:bg-purple-50 border border-slate-200 text-[10px] font-black text-slate-700 rounded-none cursor-pointer truncate"
                >
                  Fill {r.name}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <span className="text-xs font-bold text-slate-500">Don't have an account? </span>
            <Link to="/signup" className="text-xs font-black text-[#C04DF7] hover:underline">
              Create Free Account
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
