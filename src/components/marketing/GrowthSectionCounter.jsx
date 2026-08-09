import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export const AnimatedCounter = ({ value, duration = 2.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  // Extract numeric digits
  const numericMatch = value.match(/\d[\d,]*/);
  const targetNum = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ''), 10) : 0;
  
  const matchStr = numericMatch ? numericMatch[0] : '';
  const matchIdx = value.indexOf(matchStr);
  const prefix = matchIdx > 0 ? value.substring(0, matchIdx) : '';
  const suffix = matchIdx >= 0 ? value.substring(matchIdx + matchStr.length) : value;

  useEffect(() => {
    if (!isInView || targetNum === 0) return;

    let startTime = null;
    const durationMs = duration * 1000;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      
      // Smooth exponential ease-out
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * targetNum));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, targetNum, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}
      {isInView ? count.toLocaleString() : 0}
      {suffix}
    </span>
  );
};
