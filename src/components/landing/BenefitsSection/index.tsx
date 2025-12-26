import type { ISectionProps } from '@/types/landing/sections';

import styles from './styles.module.scss';
import { BENEFITS } from './benefits.config';

const BenefitsSection = ({ id, children }: ISectionProps) => {
  return (
    <section id={id ?? 'benefits-section'} className={styles['benefits-section']}>
      <h2 className={styles['section-heading']}>What you get</h2>
      <ul className={styles['benefits-wrapper']}>
        {
          BENEFITS.map(
            (item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            )
          )
        }
      </ul>
    </section>
  );
}

export default BenefitsSection;
