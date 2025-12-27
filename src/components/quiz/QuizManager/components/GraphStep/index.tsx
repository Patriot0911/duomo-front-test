'use client';

import { PLANS_LIST } from '@/shared/plans.config';
import type { IStepComponentProps } from '@/types/quiz/step';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import formatDate from '@/libs/utils/formatDate';
import GrowthChart from './components/GrowthChart';
import Button from '@/components/ui/Button';

import styles from './styles.module.scss';

export const GRAPH_KEY = 'graph';

const GraphStep = ({ next, }: IStepComponentProps) => {
  const params = useSearchParams();
  const router = useRouter();
  const finishDate = useMemo((() => {
      const currentDate = new Date();
      const id = params.get('id');
      const plan = PLANS_LIST.find(
        (p) => p.id == id
      );
      if (!plan) {
        router.push('/');
        console.warn(`Cannot find plan with id: ${id}`);
        return currentDate;
      };
      const periodInMonth = plan.time;
      currentDate.setMonth(currentDate.getMonth() + periodInMonth);
      return currentDate;
    }), [next]
  );
  return (
    <div className={styles['graph-step-block']}>
      <div className={styles['top-section']}>
        <h2 className={'section-heading'}>See your Spiritual Growth progress by {formatDate(finishDate)}</h2>
        <GrowthChart
          finishDate={finishDate}
        />
      </div>
      <Button onClick={() => next({})}>
        Continue
      </Button>
    </div>
  );
}

export default GraphStep;
