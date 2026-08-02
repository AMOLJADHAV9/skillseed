import React, { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// ─── Data ─────────────────────────────────────────────────────────────────────
const lineData = [
  { date: new Date(2026, 0, 1), students: 600, courses: 40, countries: 18 },
  { date: new Date(2026, 1, 1), students: 620, courses: 42, countries: 20 },
  { date: new Date(2026, 2, 1), students: 680, courses: 45, countries: 22 },
  { date: new Date(2026, 3, 1), students: 720, courses: 48, countries: 24 },
  { date: new Date(2026, 4, 1), students: 750, courses: 50, countries: 26 },
  { date: new Date(2026, 5, 1), students: 810, courses: 54, countries: 28 },
  { date: new Date(2026, 6, 1), students: 870, courses: 56, countries: 30 },
  { date: new Date(2026, 7, 1), students: 960, courses: 60, countries: 32 },
  { date: new Date(2026, 8, 1), students: 1050, courses: 65, countries: 34 },
  { date: new Date(2026, 9, 1), students: 1180, courses: 70, countries: 35 },
  { date: new Date(2026, 10, 1), students: 1320, courses: 74, countries: 36 },
  { date: new Date(2026, 11, 1), students: 1480, courses: 78, countries: 38 },
];

// ─── Custom Tooltip ────────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  const month =
    label instanceof Date
      ? label.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
      : label;

  return (
    <div className="glass-card rounded-2xl px-4 py-3 text-xs shadow-xl border border-purple-100 min-w-[160px]">
      <p className="font-black text-slate-800 mb-2">{month}</p>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center justify-between gap-4 py-0.5">
          <span className="flex items-center gap-1.5 font-semibold text-slate-600">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: entry.color }}
            />
            {entry.name}
          </span>
          <span className="font-black text-slate-900">{Number(entry.value).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

// ─── Custom Legend ─────────────────────────────────────────────────────────────
const CustomLegend = ({ payload }) => (
  <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-600 pt-2">
    {payload?.map((entry) => (
      <span key={entry.value} className="flex items-center gap-1.5">
        <span
          className="w-3 h-3 rounded-full inline-block"
          style={{ backgroundColor: entry.color }}
        />
        {entry.value}
      </span>
    ))}
  </div>
);

// ─── Main Chart Component ──────────────────────────────────────────────────────
export const GrowthAreaChart = () => {
  const [hiddenSeries, setHiddenSeries] = useState({});

  const toggleSeries = (key) =>
    setHiddenSeries((prev) => ({ ...prev, [key]: !prev[key] }));

  const SERIES = [
    { key: 'students', name: 'Students', color: '#C04DF7', gradient: 'gradStudents' },
    { key: 'courses',  name: 'Courses',  color: '#22C55E', gradient: 'gradCourses' },
    { key: 'countries',name: 'Countries',color: '#F59E0B', gradient: 'gradCountries' },
  ];

  return (
    <div style={{ width: '100%', height: 280 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={lineData}
          margin={{ top: 10, right: 10, bottom: 0, left: -10 }}
        >
          <defs>
            {SERIES.map(({ key, color, gradient }) => (
              <linearGradient key={gradient} id={gradient} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="rgba(148,163,184,0.15)"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 700 }}
            tickFormatter={(v) =>
              v instanceof Date
                ? v.toLocaleDateString(undefined, { month: 'short' })
                : v
            }
            padding={{ left: 10, right: 10 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 700 }}
            tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v)}
          />

          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />

          {SERIES.map(({ key, name, color, gradient }) => (
            <Area
              key={key}
              dataKey={key}
              name={name}
              type="monotone"
              stroke={color}
              strokeWidth={2.5}
              fill={`url(#${gradient})`}
              dot={false}
              activeDot={{ r: 5, stroke: color, strokeWidth: 2, fill: '#fff' }}
              hide={!!hiddenSeries[key]}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
