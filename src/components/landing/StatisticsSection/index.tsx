import type { ISectionProps } from '@/types/landing/sections';
import { STATISTICS } from './statistics.config';

import styles from './styles.module.scss';

const StatisticsSection = ({ id, }: ISectionProps) => {
  return (
    <section id={id ?? 'statistics-section'} className={styles['statistics-section']}>
      <h2 className={'section-heading'}>People just like you achieved great results with App!</h2>
      <div className={styles['statistics-list-wrapper']}>
        {
          STATISTICS.map(
            (item) => (
              <div key={item.id} className={styles['statistics-item']}>
                <span className={styles['chance-wrapper']}>{item.chance}%</span>
                <p>{item.description}</p>
              </div>
            )
          )
        }
      </div>
    </section>
  );
}

export default StatisticsSection;
