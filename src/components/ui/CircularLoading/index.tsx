'use client';

import type { ICircularLoadingProps, TLoadingSize } from '@/types/ui/loading';
import { useEffect, useState } from 'react';
import { cn } from '@/libs/cn';

import styles from './styles.module.scss';

const SIZE_TOKENS: Record<Exclude<TLoadingSize, number>, number> = {
  xs: 20,
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

const resolveSize = (size?: TLoadingSize) => {
  if (typeof size === 'number') return size;
  if (!size) return SIZE_TOKENS.md;
  return SIZE_TOKENS[size];
};

const CircularLoading = ({ autoStart, duration, onComplete, type, size, color, lineCap }: ICircularLoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const pxSize = resolveSize(size);
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const innerRadius = radius * 0.7;
  const innerCircumference = 2 * Math.PI * innerRadius;
  const gapAngle = Math.PI / 2.3;

  const gapOffset = innerCircumference * (gapAngle / (2 * Math.PI));
  const gapLength = innerCircumference * 0.14;
  const visibleLength = innerCircumference - gapLength;

  const displayCountValue = isComplete
    ? 100
    : Math.round(progress / 2) * 2;

  useEffect(() => {
    if (!autoStart) return;

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const value = Math.min((elapsed / duration) * 99.5, 99.5);
      setProgress(value);

      if (elapsed < duration)
        return requestAnimationFrame(tick);
      if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
    };

    requestAnimationFrame(tick);
  }, [autoStart]);

  return (
    <div
      className={styles['loading-wrapper']}
      style={{ '--size': `${pxSize}px` } as React.CSSProperties}
    >
      <svg viewBox='0 0 40 40' className={styles['svg-circles']}>
        {
          type == 'tick' && (
            <circle
              cx='20'
              cy='20'
              r={innerRadius}
              stroke='rgba(0,0,0,0.15)'
              strokeWidth={'3'}
              fill='none'
              strokeLinecap='round'
              strokeDasharray={`${visibleLength} ${gapLength}`}
              strokeDashoffset={-gapOffset}
              className={isComplete ? styles['visible'] : styles['hide']}
            />
          )
        }

        <circle
          cx='20'
          cy='20'
          r={radius}
          stroke={color ?? '#222B38'}
          strokeWidth={'3'}
          fill='none'
          strokeLinecap={lineCap ?? 'round'}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn(
            styles['progress'],
            (isComplete && type == 'tick') && styles['hide']
          )}
        />
      </svg>

      {
        type == 'tick' ? (
          <div
            className={cn(
              styles['check'],
              isComplete && styles['visible']
            )}
          >
            <svg width='17' height='16' viewBox='0 0 15 12' fill='none'>
              <path
                d='M1 6.5L5 10.5C7 6.5 10 3.5 14 1'
                stroke='#222B38'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        ) : (<div className={styles['count-wrapper']}>{displayCountValue}%</div>)
      }
    </div>
  );
}

export default CircularLoading;
