import React from 'react';

/**
 * LoadingIndicator
 *
 * Props:
 *   type: "line-simple" | "line-spinner" | "dot-circle"
 *   size: "sm" | "md" | "lg"
 *   label: string (optional)
 *   className: string (optional)
 */
export const LoadingIndicator = ({
  type = 'line-simple',
  size = 'md',
  label = '',
  className = '',
}) => {
  const sizeMap = {
    sm: { track: 'w-24 h-1',    spinner: 'w-5 h-5',  dot: 'w-1.5 h-1.5', gap: 'gap-1',   text: 'text-[10px]' },
    md: { track: 'w-36 h-1.5',  spinner: 'w-7 h-7',  dot: 'w-2.5 h-2.5', gap: 'gap-2',   text: 'text-xs' },
    lg: { track: 'w-52 h-2',    spinner: 'w-10 h-10', dot: 'w-4 h-4',    gap: 'gap-3',   text: 'text-sm' },
  };

  const s = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex flex-col items-center ${s.gap} ${className}`}>

      {/* ── line-simple: animated progress shimmer bar ── */}
      {type === 'line-simple' && (
        <div className={`${s.track} bg-purple-100 rounded-full overflow-hidden relative`}>
          <span
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#C04DF7] via-purple-400 to-[#C04DF7] animate-[line-slide_1.4s_ease-in-out_infinite]"
            style={{ width: '45%' }}
          />
        </div>
      )}

      {/* ── line-spinner: circular spinner ── */}
      {type === 'line-spinner' && (
        <div className={`${s.spinner} relative`}>
          <svg
            className={`${s.spinner} animate-spin`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12" cy="12" r="10"
              stroke="#E5CCFA"
              strokeWidth="3"
            />
            <path
              d="M12 2 A10 10 0 0 1 22 12"
              stroke="#C04DF7"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* ── dot-circle: bouncing dots in a row ── */}
      {type === 'dot-circle' && (
        <div className="flex items-center gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`${s.dot} rounded-full bg-[#C04DF7] animate-bounce`}
              style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.9s' }}
            />
          ))}
        </div>
      )}

      {/* Label */}
      {label && (
        <span className={`${s.text} font-bold text-slate-500 tracking-wide`}>
          {label}
        </span>
      )}
    </div>
  );
};
