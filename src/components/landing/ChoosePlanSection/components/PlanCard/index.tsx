import { IPlanCardProps } from '@/types/landing/plans';
import { BsCurrencyDollar } from 'react-icons/bs';
import { cn } from '@/libs/cn';

import styles from './styles.module.scss';

const PlanCard = ({ label, isMostPopular, price, isSelected, select, }: IPlanCardProps) => {
  return (
    <div className={styles['card-outter-wrapper']} onClick={select}>
      {
        isMostPopular && (
          <div className={cn(styles['popular-label'], isSelected && styles['selected'])}>
            MOST POPULAR
          </div>
        )
      }
      <div
        className={cn(
          styles['card-wrapper'],
          isSelected && styles['selected'],
          isMostPopular && styles['popular']
        )}
      >
        <div
          className={cn(
            styles['select-circle'],
            isSelected && styles['selected']
          )}
        ></div>
        <span className={styles['card-label']}>{label}</span>
        <div className={styles['price-wrapper']}>
          <div className={styles['currency-wrapper']}>
            <BsCurrencyDollar />
          </div>
          <span className={styles['price']}>{price}</span>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
