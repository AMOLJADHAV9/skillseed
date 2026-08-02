import React from 'react';
import { useNotifications } from '../context/NotificationContext';
import { Bell, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotificationsPage = () => {
  const { notifications, markAsRead, markAllAsRead } = useNotifications();

  return (
    <div className="py-10 px-4 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-white flex items-center gap-2">
          <Bell className="w-6 h-6 text-purple-400" /> Notifications & Alerts
        </h1>
        <Button size="sm" variant="glass" onClick={markAllAsRead}>
          Mark All as Read
        </Button>
      </div>

      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            onClick={() => markAsRead(n.id)}
            className={`p-4 rounded-2xl border transition cursor-pointer ${
              !n.read ? 'bg-purple-950/40 border-purple-500/40 text-white' : 'bg-slate-900/60 border-white/5 text-slate-400'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-black text-white">{n.title}</h3>
              <span className="text-[10px] text-slate-400">{n.time}</span>
            </div>
            <p className="text-xs leading-relaxed">{n.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
