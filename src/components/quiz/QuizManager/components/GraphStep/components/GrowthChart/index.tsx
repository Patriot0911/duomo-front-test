'use client';

import type { IGraphProps, } from '@/types/quiz/graph';
import { useMemo } from 'react';
import styles from './styles.module.scss';
import formatDate from '@/libs/utils/formatDate';
import { generateData, generatePath, jitter } from '@/libs/utils/graph';

const WIDTH = 287;
const HEIGHT = 249;

const GrowthChart = ({ finishDate, data }: IGraphProps) => {
  const { path, points, } = useMemo(
    () => {
      const pointsData = data ?? generateData();
      const stepX = WIDTH / (pointsData.length - 1);

      const values = pointsData.map((v, i, arr) => {
        if (i === arr.length - 1) return 100;

        return Math.max(0, Math.min(100, v + jitter(i)));
      });

      const points = values.map((v, i) => ({
        x: i * stepX,
        y: HEIGHT - (v / 100) * HEIGHT,
      }));

      return {
        path: generatePath(points),
        points,
      }
    }, [data]
  );

  return (
    <div className={styles['graph-wrapper']}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        className={styles.graph}
      >
        {/* для плашки з "Date" */}
        <linearGradient id="rectGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF9600" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF4D78" stopOpacity="1" />
        </linearGradient>

        {[...new Array(5)].map((_, i) => {
          const y = (HEIGHT / 4) * i;
          return (
            <line
              key={i}
              x1={0}
              y1={y}
              x2={WIDTH}
              y2={y}
              stroke="rgba(0,0,0,0.1)"
              strokeWidth={1}
            />
          );
        })}
        <path d={path} className={styles.line} />

        <circle cx={points[0].x} cy={points[0].y} r="4" className={styles.dot} />

        <rect
          x={points[0].x - 2}
          y={points[0].y + 2}
          width={40}
          height={20}
          rx={4}
          ry={4}
          fill="#ffff"
          stroke='rgba(0, 0, 0, 0.123)'
          strokeWidth={1}
        />
        <text
          x={points[0].x}
          y={points[0].y + 18}
          className={styles.label}
          textAnchor="start"
        >
          Now
        </text>

        <circle
          cx={points.at(-1)!.x}
          cy={points.at(-1)!.y}
          r="4"
          className={styles.dot}
        />

        <rect
          x={points.at(-1)!.x - 125}
          y={points.at(-1)!.y - 28}
          width={130}
          height={20}
          rx={4}
          ry={4}
          fill="url(#rectGradient)"
          stroke='rgba(0, 0, 0, 0.123)'
          strokeWidth={1}
        />
        <text
          x={points.at(-1)!.x}
          y={points.at(-1)!.y - 12}
          className={styles.label}
          fill='#ffff'
          textAnchor="end"
        >
          {formatDate(finishDate)}
        </text>
      </svg>
    </div>
  );
};

export default GrowthChart;
