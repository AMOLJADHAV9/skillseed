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

// Data matching the growth trajectory in the reference mockup
const lineData = [
  { month: 'Jan', students: 300, courses: 90, countries: 15 },
  { month: 'Feb', students: 400, courses: 105, countries: 18 },
  { month: 'Mar', students: 500, courses: 120, countries: 22 },
  { month: 'Apr', students: 600, courses: 140, countries: 25 },
  { month: 'May', students: 700, courses: 160, countries: 28 },
  { month: 'Jun', students: 800, courses: 175, countries: 30 },
  { month: 'Jul', students: 890, courses: 195, countries: 35 },
  { month: 'Aug', students: 1010, courses: 215, countries: 40 },
  { month: 'Sep', students: 1120, courses: 245, countries: 45 },
  { month: 'Oct', students: 1220, courses: 270, countries: 50 },
  { month: 'Nov', students: 1310, courses: 290, countries: 55 },
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

// Custom End Dot with attached Badge Pill matching reference design
const renderCustomDot = (color, badgeText) => (props) => {
  const { cx, cy, index } = props;
  const isLast = index === lineData.length - 1;

  return (
    <g key={`dot-${props.dataKey || color}-${index}`}>
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill={color}
        stroke="#FFFFFF"
        strokeWidth={2.5}
      />
      {isLast && (
        <g transform={`translate(${cx + 8}, ${cy - 11})`}>
          <rect
            x="0"
            y="0"
            width={badgeText.length > 3 ? 42 : 36}
            height="22"
            rx="11"
            fill={color}
          />
          <text
            x={badgeText.length > 3 ? 21 : 18}
            y="14"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            {badgeText}
          </text>
        </g>
      )}
    </g>
  );
};

export const GrowthAreaChart = () => {
  return (
    <div className="w-full space-y-4 font-sans">
      <div className="relative w-full h-[320px] pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={lineData} margin={{ top: 15, right: 55, bottom: 0, left: -10 }}>
            <defs>
              <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.02} />
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
              stroke="#8B5CF6"
              strokeWidth={3}
              fill="url(#purpleGrad)"
              dot={renderCustomDot('#8B5CF6', '1.4K')}
              activeDot={{ r: 7, fill: '#8B5CF6', strokeWidth: 3, stroke: '#FFFFFF' }}
            />

            {/* Area / Line 2: Courses (Green) */}
            <Area
              dataKey="courses"
              name="Courses"
              type="monotone"
              stroke="#10B981"
              strokeWidth={2.5}
              fill="url(#greenGrad)"
              dot={renderCustomDot('#10B981', '180')}
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
              dot={renderCustomDot('#F97316', '60')}
              activeDot={{ r: 6, fill: '#F97316', strokeWidth: 2, stroke: '#FFFFFF' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend Centered at Bottom */}
      <div className="flex flex-wrap justify-center items-center gap-8 text-xs sm:text-sm font-bold text-slate-800 pt-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#8B5CF6] inline-block shadow-xs" />
          <span>Students</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block shadow-xs" />
          <span>Courses</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#F97316] inline-block shadow-xs" />
          <span>Countries</span>
        </div>
      </div>
    </div>
  );
};

export default GrowthAreaChart;

