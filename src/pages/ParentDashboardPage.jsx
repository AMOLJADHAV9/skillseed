import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { MOCK_PARENT_DATA } from '../data/mockUsers';
import { DashboardTopNav } from '../components/dashboard/DashboardTopNav';
import {
  Clock,
  CheckCircle,
  MessageSquare,
  Download,
  ShieldCheck,
  Sliders
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const ParentDashboardPage = () => {
  const { user } = useAuth();
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);
  const [screenTimeLimit, setScreenTimeLimit] = useState(90);
  const [parentPinEnabled, setParentPinEnabled] = useState(true);

  const currentChild = MOCK_PARENT_DATA.children[selectedChildIndex];

  return (
    <div className="space-y-8">
      
      <DashboardTopNav
        title="Parent Portal & Safety Controls 👨‍👩‍👧"
        subtitle="Monitor child progress, screen time limits, and teacher notes."
      />

      {/* Child Switcher Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white rounded-[32px] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-3xl shadow-sm">
            🎓
          </div>
          <div>
            <div className="flex items-center gap-2">
              <select
                value={selectedChildIndex}
                onChange={(e) => setSelectedChildIndex(Number(e.target.value))}
                className="bg-slate-50 border border-slate-200 text-slate-900 font-black text-lg px-3 py-1.5 rounded-xl cursor-pointer"
              >
                {MOCK_PARENT_DATA.children.map((c, idx) => (
                  <option key={c.id} value={idx}>
                    {c.name} ({c.grade})
                  </option>
                ))}
              </select>
            </div>
            <p className="text-xs text-slate-500 font-bold mt-1">Focus Subject: {currentChild.focusSubject}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="emerald" size="md" className="font-black">
            <Download className="w-4 h-4" /> Download Report Card PDF
          </Button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Weekly Study Time</span>
            <Clock className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{currentChild.totalStudyHours}</div>
          <div className="text-[11px] text-emerald-600 font-bold">↑ +2.5 hrs vs last week</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Class Attendance</span>
            <CheckCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{currentChild.attendanceRate}</div>
          <div className="text-[11px] text-slate-500 font-bold">12/12 Live Sessions Attended</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Current Streak</span>
            <span className="text-xl">🔥</span>
          </div>
          <div className="text-2xl font-black text-amber-600">{currentChild.streak} Days</div>
          <div className="text-[11px] text-slate-500 font-bold">Daily login target reached</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">COPPA Safety Status</span>
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-emerald-600">100% Protected</div>
          <div className="text-[11px] text-slate-500 font-bold">Ad-Free & Moderated</div>
        </div>

      </div>

      {/* Main Grid: Screen Time & Teacher Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Screen Time Controls */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-600" /> Screen Time & Parent PIN Controls
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                <span>Daily Learning Screen Limit</span>
                <span className="text-indigo-600 font-black">{screenTimeLimit} Minutes / Day</span>
              </div>
              <input
                type="range"
                min="30"
                max="180"
                step="15"
                value={screenTimeLimit}
                onChange={(e) => setScreenTimeLimit(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-black text-slate-900">Parent Safety Lock PIN</div>
                <div className="text-[10px] text-slate-500 font-bold">Requires 4-digit PIN to change settings</div>
              </div>
              <button
                onClick={() => setParentPinEnabled(!parentPinEnabled)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer ${
                  parentPinEnabled ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {parentPinEnabled ? 'Enabled' : 'Disabled'}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Teacher Notes */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-500" /> Teacher Feedback Notes
          </h3>

          <div className="space-y-3">
            {MOCK_PARENT_DATA.teacherFeedback.map((fb, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-indigo-700">{fb.teacher}</span>
                  <span className="text-[10px] text-slate-400 font-bold">{fb.date}</span>
                </div>
                <div className="text-xs font-black text-amber-600">{fb.subject}</div>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">"{fb.message}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
