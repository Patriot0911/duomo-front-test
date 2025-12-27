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
        <path d={path} className={styles.line} />

        <circle cx={points[0].x} cy={points[0].y} r="4" className={styles.dot} />
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
        <text
          x={points.at(-1)!.x}
          y={points.at(-1)!.y - 12}
          className={styles.label}
          textAnchor="end"
        >
          {formatDate(finishDate)}
        </text>
      </svg>
    </div>
  );
};

export default GrowthChart;
