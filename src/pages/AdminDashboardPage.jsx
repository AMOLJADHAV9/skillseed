import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { MOCK_ADMIN_DATA } from '../data/mockUsers';
import { DashboardTopNav } from '../components/dashboard/DashboardTopNav';
import {
  Users,
  DollarSign,
  BookOpen,
  ShieldCheck,
  Search,
  Bell,
  CheckCircle,
  Plus,
  MoreVertical,
  Activity
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const AdminDashboardPage = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState(MOCK_ADMIN_DATA.usersList);
  const [searchFilter, setSearchFilter] = useState('');
  const [broadcastSent, setBroadcastSent] = useState(false);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    u.role.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="space-y-8">
      
      {/* Top Header */}
      <DashboardTopNav
        title="Admin Command Center ⚡"
        subtitle="Platform user directory, revenue metrics, and global broadcast controls."
      />

      {/* Platform Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="glass-card p-6 rounded-3xl border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">Total Learners</span>
            <Users className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-3xl font-black text-white">{MOCK_ADMIN_DATA.totalLearners.toLocaleString()}</div>
          <div className="text-[11px] text-emerald-400 font-bold mt-1">↑ +14% this month</div>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">Active Teachers</span>
            <BookOpen className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-3xl font-black text-white">{MOCK_ADMIN_DATA.activeTeachers}</div>
          <div className="text-[11px] text-slate-400 mt-1">100% Verified Educators</div>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">Monthly SaaS MRR</span>
            <DollarSign className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-emerald-400">{MOCK_ADMIN_DATA.monthlyRevenue}</div>
          <div className="text-[11px] text-emerald-400 font-bold mt-1">↑ +8.2% ARR growth</div>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">System Uptime</span>
            <Activity className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-3xl font-black text-white">99.98%</div>
          <div className="text-[11px] text-emerald-400 font-bold mt-1">All Systems Operational</div>
        </div>

      </div>

      {/* User Directory Table */}
      <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h3 className="text-lg font-black text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" /> User Directory
          </h3>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Filter users or roles..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="px-4 py-2 bg-slate-900 border border-white/10 rounded-2xl text-xs text-white placeholder-slate-400 focus:outline-none"
            />
            <Button size="sm" variant="amber" onClick={() => setBroadcastSent(!broadcastSent)}>
              <Bell className="w-4 h-4" /> {broadcastSent ? 'Broadcast Sent!' : 'Send Global Alert'}
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/80 text-slate-400 uppercase font-black">
              <tr>
                <th className="p-3.5 rounded-l-xl">User Name</th>
                <th className="p-3.5">Account Role</th>
                <th className="p-3.5">Email</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 rounded-r-xl">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-800/40 transition">
                  <td className="p-3.5 font-extrabold text-white">{u.name}</td>
                  <td className="p-3.5">
                    <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 font-extrabold rounded-lg border border-purple-500/30">
                      {u.role}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-300">{u.email}</td>
                  <td className="p-3.5">
                    <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold rounded-lg">
                      {u.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-400">{u.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
