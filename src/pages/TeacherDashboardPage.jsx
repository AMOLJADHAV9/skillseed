import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { MOCK_TEACHER_DATA } from '../data/mockUsers';
import { DashboardTopNav } from '../components/dashboard/DashboardTopNav';
import {
  BookOpen,
  Video,
  Users,
  CheckCircle2,
  Clock,
  FileCheck,
  PlusCircle,
  BarChart3,
  Star
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const TeacherDashboardPage = () => {
  const { user } = useAuth();
  const [gradedItems, setGradedItems] = useState([]);

  const handleGradeAssignment = (id) => {
    setGradedItems([...gradedItems, id]);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <DashboardTopNav
        title="Teacher Console & Class Management 👩‍🏫"
        subtitle="Manage live sessions, grade student submissions, and track class progress."
      />

      {/* Class Schedule Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_TEACHER_DATA.classes.map((cls) => (
          <div key={cls.id} className="glass-card p-6 rounded-3xl border border-purple-500/30 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 font-extrabold text-[10px] rounded-full uppercase border border-purple-500/40">
                  {cls.status}
                </span>
                <span className="text-xs text-slate-400 font-bold">{cls.nextSession}</span>
              </div>
              <h3 className="text-xl font-black text-white">{cls.title}</h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" /> {cls.studentsCount} Enrolled Learners
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button size="sm" variant="emerald" className="w-full justify-center">
                <Video className="w-4 h-4" /> Start Live Classroom
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pending Assignment Grading Drawer */}
      <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-amber-400" /> Pending Submissions to Grade
          </h3>
          <span className="text-xs text-slate-400 font-bold">2 Items Awaiting Review</span>
        </div>

        <div className="space-y-3">
          {MOCK_TEACHER_DATA.pendingGrading.map((item) => {
            const isGraded = gradedItems.includes(item.id);
            return (
              <div key={item.id} className="p-4 bg-slate-900/80 rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-white">{item.studentName}</span>
                    <span className="text-[10px] text-purple-400 font-bold">• {item.course}</span>
                  </div>
                  <div className="text-sm font-extrabold text-amber-300 mt-0.5">{item.title}</div>
                  <div className="text-[10px] text-slate-500 mt-1">{item.date}</div>
                </div>

                <div className="flex items-center gap-2">
                  {isGraded ? (
                    <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 font-extrabold text-xs rounded-xl flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Graded (A+ / 100 XP)
                    </span>
                  ) : (
                    <Button size="sm" variant="amber" onClick={() => handleGradeAssignment(item.id)}>
                      Approve & Award +100 XP
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
