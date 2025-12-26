'use client';

import { ICircularLoadingProps } from '@/types/ui/loading';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

const CircularLoading = ({ autoStart, duration, onComplete, }: ICircularLoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const innerRadius = radius * 0.8;
  const innerCircumference = 2 * Math.PI * innerRadius;
  const gapAngle = Math.PI / 2.3;

  const gapOffset = innerCircumference * (gapAngle / (2 * Math.PI));
  const gapLength = innerCircumference * 0.14;
  const visibleLength = innerCircumference - gapLength;

  useEffect(() => {
    if (!autoStart) return;

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const value = Math.min((elapsed / duration) * 99.5, 99.5);
      setProgress(value);

      if (elapsed < duration)
        return requestAnimationFrame(tick);
      setIsComplete(true);
      onComplete?.();
    };

    requestAnimationFrame(tick);
  }, [autoStart, duration, onComplete]);

  return (
    <div className={styles['loading-wrapper']}>
      <svg viewBox='0 0 40 40' className={styles['svg-circles']}>
        <circle
          cx='20'
          cy='20'
          r={innerRadius}
          stroke='rgba(0,0,0,0.15)'
          strokeWidth='3'
          fill='none'
          strokeLinecap='round'
          strokeDasharray={`${visibleLength} ${gapLength}`}
          strokeDashoffset={-gapOffset}
          className={isComplete ? styles['visible'] : styles['hide']}
        />

        <circle
          cx='20'
          cy='20'
          r={radius}
          stroke='#222B38'
          strokeWidth='3'
          fill='none'
          strokeLinecap='round'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`${styles['progress']} ${
            isComplete ? styles['hide'] : ''
          }`}
        />
      </svg>

      <div
        className={`${styles['check']} ${
          isComplete ? styles['visible'] : ''
        }`}
      >
        <svg width='20' height='16' viewBox='0 0 15 12' fill='none'>
          <path
            d='M1 6.5L5 10.5C7 6.5 10 3.5 14 1'
            stroke='#222B38'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </div>
  );
}

export default CircularLoading;
