'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import PlanCard from '../PlanCard';
import { PLANS_LIST } from '@/shared/plans.config';

import styles from './styles.module.scss';

const PlanSelection = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<undefined | string>(undefined);

  const getPlanHandle = () => {
    if (!selectedPlanId || !window) return;
    // ніби ми дійсно обрали якийсь план, та йдемо його купляти etc
    window.open(
      `${window.location.origin}/checkout-subscription?id=${selectedPlanId}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      <div className={styles['plans-list']}>
        {
          PLANS_LIST.map(
            (item) => (
              <PlanCard
                {...item}
                key={item.id}
                isSelected={item.id === selectedPlanId}
                select={
                  () => setSelectedPlanId(
                    item.id === selectedPlanId ? undefined : item.id
                  )
                }
              />
            )
          )
        }
      </div>
      <Button onClick={getPlanHandle}>Get my plan</Button>
    </>
  );
}

export default PlanSelection;
