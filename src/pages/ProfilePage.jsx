import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGamification } from '../context/GamificationContext';
import { User, Sparkles, Award, Flame, Shield, Check } from 'lucide-react';
import { Button } from '../components/common/Button';

export const ProfilePage = () => {
  const { user } = useAuth();
  const { xp, coins, streak, level, achievements } = useGamification();

  const [avatar, setAvatar] = useState('🧑‍🚀');
  const avatars = ['🧑‍🚀', '🦖', '🤖', '🦄', '🧙‍♂️', '🦊', '🚀', '👑'];

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto space-y-8">
      {/* Header Profile Box */}
      <div className="glass-card p-8 rounded-[40px] border border-purple-500/30 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
        <div className="text-6xl p-4 bg-purple-600/30 border border-purple-500/40 rounded-3xl animate-float">
          {avatar}
        </div>
        <div className="space-y-1 text-center md:text-left">
          <h1 className="text-3xl font-black text-white">{user.name}</h1>
          <p className="text-xs text-purple-300 font-bold">{user.grade} • Level {level} Explorer</p>
          <div className="flex items-center justify-center md:justify-start gap-4 pt-2 text-xs">
            <span className="text-amber-400 font-extrabold flex items-center gap-1">
              <Flame className="w-4 h-4 fill-amber-400" /> {streak}d Streak
            </span>
            <span className="text-purple-300 font-extrabold flex items-center gap-1">
              <Sparkles className="w-4 h-4" /> {xp} XP
            </span>
          </div>
        </div>
      </div>

      {/* Avatar Picker */}
      <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
        <h3 className="text-sm font-black text-white uppercase">Choose Avatar Icon</h3>
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {avatars.map((av) => (
            <button
              key={av}
              onClick={() => setAvatar(av)}
              className={`w-12 h-12 text-2xl rounded-2xl flex items-center justify-center transition ${
                avatar === av ? 'bg-purple-600 ring-4 ring-purple-400/50 scale-110' : 'bg-slate-900 hover:bg-slate-800'
              }`}
            >
              {av}
            </button>
          ))}
        </div>
      </div>

      {/* Badges Collection */}
      <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
        <h3 className="text-base font-black text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" /> Earned Badges Matrix
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-4 rounded-2xl border flex items-center gap-3 ${
                ach.unlocked ? 'bg-slate-800/90 border-amber-500/40 text-white' : 'bg-slate-900/40 border-white/5 opacity-40'
              }`}
            >
              <span className="text-3xl">{ach.icon}</span>
              <div>
                <div className="text-xs font-black">{ach.name}</div>
                <div className="text-[10px] text-slate-400">{ach.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
