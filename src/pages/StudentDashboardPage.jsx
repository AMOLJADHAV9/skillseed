import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useGamification } from '../context/GamificationContext';
import { useCourses } from '../context/CourseContext';
import { DashboardTopNav } from '../components/dashboard/DashboardTopNav';
import { CourseCard } from '../components/learning/CourseCard';
import { MOCK_LEADERBOARD } from '../data/mockLeaderboard';
import {
  Flame,
  Sparkles,
  Trophy,
  PlayCircle,
  Zap,
  Award
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const StudentDashboardPage = () => {
  const { user } = useAuth();
  const { xp, level, streak, addXp, triggerCelebration, achievements } = useGamification();
  const { courses } = useCourses();

  const handleCompleteQuest = (questTitle, rewardXp) => {
    addXp(rewardXp);
    triggerCelebration({
      title: '🎯 QUEST COMPLETED!',
      message: `You completed "${questTitle}" and earned +${rewardXp} XP!`,
      icon: '⚡',
      xpEarned: rewardXp
    });
  };

  const activeCourses = courses.filter((c) => c.progress > 0);

  return (
    <div className="space-y-8">
      
      {/* Top Greeting & Search */}
      <DashboardTopNav
        title={`Welcome back, ${user.name}! 🚀`}
        subtitle="Grade 4 • Star Explorer • Level 9 Quest Master"
      />

      {/* Gamified Hero Banner Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Banner 1: Streak & Level Card */}
        <div className="lg:col-span-2 relative bg-gradient-to-r from-indigo-600 to-purple-600 p-6 sm:p-8 rounded-[32px] text-white shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-400 text-slate-950 rounded-full font-black text-xs shadow-md">
                <Flame className="w-4 h-4 fill-slate-950" />
                <span>{streak} DAY STREAK ON FIRE!</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                You are 75 XP away from <span className="text-amber-300">Level 10 Master!</span>
              </h2>
              <p className="text-xs sm:text-sm text-indigo-100 max-w-lg font-semibold">
                Keep your daily momentum active by completing today 15-minute Python Space Shooter module.
              </p>
            </div>

            <div className="flex-shrink-0 text-center bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 w-full md:w-auto">
              <div className="text-4xl mb-1">👑</div>
              <div className="text-lg font-black">Level {level} Explorer</div>
              <div className="text-xs text-amber-300 font-bold mt-1">{xp} Total XP</div>
            </div>
          </div>
        </div>

        {/* Banner 2: Quick Daily Quests Widget */}
        <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-md flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" /> Daily Quests
              </h3>
              <span className="text-xs text-slate-400 font-bold">Resets in 6h</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-slate-900">Complete 1 Python Lesson</div>
                  <div className="text-[10px] text-amber-600 font-bold">+50 XP Reward</div>
                </div>
                <button
                  onClick={() => handleCompleteQuest('Python Lesson', 50)}
                  className="px-3 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black rounded-xl transition cursor-pointer"
                >
                  Claim ⚡
                </button>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-slate-900">Score 100% on Space Quiz</div>
                  <div className="text-[10px] text-indigo-600 font-bold">+100 XP Reward</div>
                </div>
                <Link to="/quiz/quiz-space-1">
                  <span className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-xl inline-block">
                    Start 🚀
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Grid: Active Courses & Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Continue Learning */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-indigo-600" /> Continue Learning
            </h3>
            <Link to="/courses" className="text-xs text-indigo-600 font-black hover:underline">
              View All My Courses →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCourses.slice(0, 2).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Upcoming Live Class Banner */}
          <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-md">
                🎥
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-800 tracking-wider">
                  UPCOMING LIVE STREAM • TODAY 4:00 PM
                </span>
                <h4 className="text-base font-black text-slate-900">Space Shooter Pygame Live Coding Session</h4>
                <p className="text-xs text-slate-600 font-bold">Instructor: Dr. Sarah Spark</p>
              </div>
            </div>

            <Link to="/learn/course-1">
              <Button size="sm" variant="emerald" className="font-black">
                Join Stream 🚀
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Col: Leaderboard & Trophies */}
        <div className="space-y-6">
          
          {/* Global Leaderboard Widget */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" /> Global Leaderboard
              </h3>
              <span className="text-xs font-black text-amber-600">Top Explorers</span>
            </div>

            <div className="space-y-2">
              {MOCK_LEADERBOARD.map((item) => (
                <div
                  key={item.rank}
                  className={`flex items-center justify-between p-3 rounded-2xl border transition ${
                    item.isCurrentStudent
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-900 font-black shadow-sm'
                      : 'bg-slate-50 border-slate-200/80 text-slate-700 font-bold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 text-center font-black text-xs ${item.rank <= 3 ? 'text-amber-500 text-sm' : 'text-slate-400'}`}>
                      #{item.rank}
                    </span>
                    <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <div className="text-xs font-black">{item.name}</div>
                      <div className="text-[10px] text-slate-500 font-bold">{item.badge}</div>
                    </div>
                  </div>
                  <div className="text-xs font-black text-indigo-600">{item.xp} XP</div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Matrix Widget */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" /> Badges & Trophies
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className={`p-3 rounded-2xl border text-center transition ${
                    ach.unlocked
                      ? 'bg-amber-50 border-amber-200 text-slate-900'
                      : 'bg-slate-50 border-slate-200 opacity-40 grayscale'
                  }`}
                >
                  <div className="text-2xl mb-1">{ach.icon}</div>
                  <div className="text-[10px] font-black truncate text-slate-800">{ach.name}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
