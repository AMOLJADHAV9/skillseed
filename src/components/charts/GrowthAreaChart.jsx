import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Data matching the growth trajectory in the user's reference mockup
const lineData = [
  { month: 'Jan', students: 300, courses: 90, countries: 15 },
  { month: 'Feb', students: 400, courses: 110, countries: 18 },
  { month: 'Mar', students: 500, courses: 130, countries: 22 },
  { month: 'Apr', students: 600, courses: 145, countries: 25 },
  { month: 'May', students: 700, courses: 160, countries: 28 },
  { month: 'Jun', students: 800, courses: 175, countries: 30 },
  { month: 'Jul', students: 890, courses: 190, countries: 35 },
  { month: 'Aug', students: 1010, courses: 210, countries: 40 },
  { month: 'Sep', students: 1120, courses: 230, countries: 45 },
  { month: 'Oct', students: 1220, courses: 250, countries: 50 },
  { month: 'Nov', students: 1310, courses: 280, countries: 55 },
  { month: 'Dec', students: 1400, courses: 310, countries: 60 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 text-xs shadow-2xl border border-slate-100 min-w-[170px] z-50">
      <p className="font-black text-slate-900 mb-2 border-b border-slate-100 pb-1.5">{label} Milestone</p>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center justify-between gap-4 py-0.5">
          <span className="flex items-center gap-1.5 font-bold text-slate-600">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: entry.color }}
            />
            {entry.name}
          </span>
          <span className="font-black text-slate-900">
            {entry.dataKey === 'students' ? `${(entry.value / 1000).toFixed(1)}K` : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export const GrowthAreaChart = () => {
  return (
    <div className="w-full space-y-4">
      
      {/* Chart Wrapper Container with End Pill Labels */}
      <div className="relative w-full h-[320px] pt-4">
        
        {/* End Badge Pills on right side matching reference mockup */}
        <div className="absolute right-0 top-[18%] sm:right-2 z-20 hidden sm:flex flex-col items-end gap-1 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-[#7C3AED] text-white font-black text-xs shadow-md">
            1.4K
          </span>
        </div>

        <div className="absolute right-0 top-[62%] sm:right-2 z-20 hidden sm:flex flex-col items-end gap-1 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-[#10B981] text-white font-black text-xs shadow-md">
            180
          </span>
        </div>

        <div className="absolute right-0 top-[78%] sm:right-2 z-20 hidden sm:flex flex-col items-end gap-1 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-[#F97316] text-white font-black text-xs shadow-md">
            60
          </span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={lineData} margin={{ top: 15, right: 45, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#E2E8F0"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748B', fontWeight: 700 }}
              padding={{ left: 10, right: 10 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 300, 600, 900, 1200, 1500]}
              tick={{ fontSize: 12, fill: '#64748B', fontWeight: 700 }}
              tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}K` : v)}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Area / Line 1: Students (Purple) */}
            <Area
              dataKey="students"
              name="Students"
              type="monotone"
              stroke="#7C3AED"
              strokeWidth={3}
              fill="url(#purpleGrad)"
              dot={{ r: 4, fill: '#7C3AED', strokeWidth: 2, stroke: '#FFFFFF' }}
              activeDot={{ r: 7, fill: '#7C3AED', strokeWidth: 3, stroke: '#FFFFFF' }}
            />

            {/* Area / Line 2: Courses (Green) */}
            <Area
              dataKey="courses"
              name="Courses"
              type="monotone"
              stroke="#10B981"
              strokeWidth={2.5}
              fill="url(#greenGrad)"
              dot={{ r: 4, fill: '#10B981', strokeWidth: 2, stroke: '#FFFFFF' }}
              activeDot={{ r: 6, fill: '#10B981', strokeWidth: 2, stroke: '#FFFFFF' }}
            />

            {/* Area / Line 3: Countries (Orange) */}
            <Area
              dataKey="countries"
              name="Countries"
              type="monotone"
              stroke="#F97316"
              strokeWidth={2.5}
              fill="none"
              dot={{ r: 4, fill: '#F97316', strokeWidth: 2, stroke: '#FFFFFF' }}
              activeDot={{ r: 6, fill: '#F97316', strokeWidth: 2, stroke: '#FFFFFF' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend Centered at Bottom */}
      <div className="flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm font-bold text-slate-700 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#7C3AED] shadow-sm inline-block" />
          <span>Students</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-sm inline-block" />
          <span>Courses</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#F97316] shadow-sm inline-block" />
          <span>Countries</span>
        </div>
      </div>

    </div>
  );
};

export default GrowthAreaChart;
