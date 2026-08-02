import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useGamification } from '../../context/GamificationContext';
import {
  LayoutDashboard,
  BookOpen,
  Award,
  TrendingUp,
  Users,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Flame,
  Sparkles,
  FileCheck,
  Video,
  BarChart3,
  CreditCard
} from 'lucide-react';

export const DashboardSidebar = () => {
  const { role } = useAuth();
  const { streak, xp, level } = useGamification();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuConfig = {
    student: [
      { name: 'Student Hub', path: '/dashboard/student', icon: LayoutDashboard },
      { name: 'My Courses', path: '/courses', icon: BookOpen },
      { name: 'Progress Radar', path: '/progress', icon: TrendingUp },
      { name: 'Certificates', path: '/certificates', icon: Award },
      { name: 'Profile & Badges', path: '/profile', icon: Sparkles }
    ],
    parent: [
      { name: 'Parent Portal', path: '/dashboard/parent', icon: LayoutDashboard },
      { name: 'Progress Reports', path: '/progress', icon: TrendingUp },
      { name: 'Teacher Notes', path: '/notifications', icon: HelpCircle },
      { name: 'Settings & PIN', path: '/settings', icon: Settings }
    ],
    teacher: [
      { name: 'Teacher Console', path: '/dashboard/teacher', icon: LayoutDashboard },
      { name: 'My Classes', path: '/courses', icon: BookOpen },
      { name: 'Assignments', path: '/assignment/as-1', icon: FileCheck },
      { name: 'Live Sessions', path: '/learn/course-1', icon: Video }
    ],
    admin: [
      { name: 'Admin Command', path: '/dashboard/admin', icon: LayoutDashboard },
      { name: 'User Directory', path: '/dashboard/admin', icon: Users },
      { name: 'Analytics', path: '/progress', icon: BarChart3 },
      { name: 'Pricing & Billing', path: '/pricing', icon: CreditCard },
      { name: 'System Settings', path: '/settings', icon: Settings }
    ]
  };

  const currentMenu = menuConfig[role] || menuConfig.student;

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 260 }}
      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      className="relative flex flex-col h-[calc(100vh-5rem)] sticky top-20 bg-white/90 border-r border-slate-200 backdrop-blur-xl z-30 select-none shadow-sm"
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 p-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md z-40 transition"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Level / Streak Info Card */}
      {!collapsed && role === 'student' && (
        <div className="p-4 mx-3 mt-4 bg-indigo-50/80 rounded-2xl border border-indigo-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase text-indigo-700 tracking-wider">
              Level {level} Explorer
            </span>
            <div className="flex items-center gap-1 text-amber-600 font-black text-xs">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>{streak}d</span>
            </div>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
              style={{ width: `${(xp % 400) / 4}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1">
            <span>{xp} XP</span>
            <span>Next Level</span>
          </div>
        </div>
      )}

      {/* Nav List */}
      <div className="flex-1 py-6 px-3 space-y-1.5 overflow-y-auto">
        {currentMenu.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl font-black text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </div>

      {/* Quick Settings Footer Link */}
      <div className="p-3 border-t border-slate-200">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-3.5 py-3 rounded-2xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-black text-sm"
        >
          <Settings className="w-5 h-5" />
          {!collapsed && <span>Settings</span>}
        </Link>
      </div>
    </motion.aside>
  );
};
