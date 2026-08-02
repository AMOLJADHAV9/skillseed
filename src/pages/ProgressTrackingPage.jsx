import React from 'react';
import { useGamification } from '../context/GamificationContext';
import { TrendingUp, Award, Clock, Flame, CheckCircle } from 'lucide-react';

export const ProgressTrackingPage = () => {
  const { xp, streak, level } = useGamification();

  const subjects = [
    { name: 'Python & Game Coding', progress: 85, color: 'from-purple-500 to-indigo-500' },
    { name: 'Cosmic Astronomy & Space', progress: 60, color: 'from-blue-500 to-cyan-500' },
    { name: 'Math Logic & Puzzles', progress: 90, color: 'from-amber-400 to-orange-500' },
    { name: 'Digital Character Art', progress: 40, color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <div className="py-10 px-4 max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-2">
          <TrendingUp className="w-8 h-8 text-purple-400" /> Subject Progress & Mastery Radar
        </h1>
        <p className="text-xs text-slate-400 mt-1">Detailed breakdown of your child skill levels across STEM tracks.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Subject Progress Bars */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-6">
          <h3 className="text-base font-black text-white">Subject Mastery Level</h3>
          <div className="space-y-4">
            {subjects.map((sub) => (
              <div key={sub.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-200">
                  <span>{sub.name}</span>
                  <span className="text-purple-300">{sub.progress}%</span>
                </div>
                <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-white/10">
                  <div
                    className={`h-full bg-gradient-to-r ${sub.color} rounded-full`}
                    style={{ width: `${sub.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Study Time Summary */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-6">
          <h3 className="text-base font-black text-white">Weekly Study Breakdown</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-white/10 text-center">
              <div className="text-3xl font-black text-amber-400">14.5 Hrs</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">This Week Study</div>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-white/10 text-center">
              <div className="text-3xl font-black text-purple-300">{streak} Days</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Active Streak</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
