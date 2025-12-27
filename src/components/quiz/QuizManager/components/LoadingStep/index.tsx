'use client';

import type { IStepComponentProps } from '@/types/quiz/step';
import CircularLoading from '@/components/ui/CircularLoading';
import { LOADING_DURATION, LOADINGS } from './loadings.config';
import { useCallback, useState } from 'react';

import styles from './styles.module.scss';

export const LOADING_KEY = 'loading';

const LoadingStep = ({ next, }: IStepComponentProps) => {
  const [loadedCount, setLoadedCount] = useState(0);

  const duration = LOADINGS.length * LOADING_DURATION;

  const onLoadingFinish = useCallback(
    () => {
      const timer = setTimeout(() => next(), 500);
      return () => clearTimeout(timer);
    }, []
  );

  return (
    <div className={styles['loading-step-block']}>
      <h2 className={'section-heading'}>We are crafting <br /> your spiritual growth plan</h2>
      <div className={styles['global-loading']}>
        <CircularLoading
          duration={duration}
          type={'count'}
          size={220}
          color={'#0CBD68'}
          autoStart
          onComplete={onLoadingFinish}
        />
      </div>
      <ul className={styles['steps-list']}>
        {
          LOADINGS.map(
            (item, index) => (
              <li key={item.id}>
                <CircularLoading
                  type='tick'
                  autoStart={loadedCount == index}
                  onComplete={
                    () => setLoadedCount((c) => c+1)
                  }
                  duration={LOADING_DURATION}
                />
                {item.value}
              </li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default LoadingStep;
