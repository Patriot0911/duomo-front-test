import type { IPoint } from '@/types/quiz/graph';

export const jitter = (i: number) => Math.sin(i * 1.7) * 6;

export const generatePath = (points: IPoint[]) => {
  return points.reduce((path, p, i, arr) => {
    if (i === 0) return `M ${p.x} ${p.y}`;

    const p0 = arr[i - 2] || arr[i - 1];
    const p1 = arr[i - 1];
    const p2 = arr[i];
    const p3 = arr[i + 1] || p2;

    const cx1 = p1.x + (p2.x - p0.x) / 6;
    const cy1 = p1.y + (p2.y - p0.y) / 6;

    const cx2 = p2.x - (p3.x - p1.x) / 6;
    const cy2 = p2.y - (p3.y - p1.y) / 6;

    return `${path} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p2.x} ${p2.y}`;
  }, '');
};


export const generateData = () => {
  const dataLen = 10;
  const data: number[] = [];
  for (let i = 0; i < dataLen; i++) {
    data.push(
      i+1*5 + (Math.random()*8)
    );
  }
  return data;
};
