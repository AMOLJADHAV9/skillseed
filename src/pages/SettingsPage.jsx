import React from 'react';
import { useGamification } from '../context/GamificationContext';
import { Settings, Volume2, ShieldCheck, Moon, Bell } from 'lucide-react';
import { Button } from '../components/common/Button';

export const SettingsPage = () => {
  const { soundEnabled, setSoundEnabled } = useGamification();

  return (
    <div className="py-10 px-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-black text-white flex items-center gap-2">
        <Settings className="w-6 h-6 text-purple-400" /> Account Preferences
      </h1>

      <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
        <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-2xl">
          <div className="flex items-center gap-3">
            <Volume2 className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-xs font-bold text-white">Gamification Sound Effects</div>
              <div className="text-[10px] text-slate-400">Play fanfare on level ups and quiz wins</div>
            </div>
          </div>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
              soundEnabled ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'
            }`}
          >
            {soundEnabled ? 'Enabled' : 'Disabled'}
          </button>
        </div>

        <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-2xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-xs font-bold text-white">COPPA Safety Controls</div>
              <div className="text-[10px] text-slate-400">Require parent PIN for profile updates</div>
            </div>
          </div>
          <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-xl">
            Active
          </span>
        </div>
      </div>
    </div>
  );
};
