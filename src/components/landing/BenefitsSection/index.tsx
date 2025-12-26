import type { ISectionProps } from '@/types/landing/sections';
import { IoMdCheckmark } from 'react-icons/io';
import { BENEFITS } from './benefits.config';

import styles from './styles.module.scss';

const BenefitsSection = ({ id, }: ISectionProps) => {
  return (
    <section id={id ?? 'benefits-section'} className={styles['benefits-section']}>
      <h2 className={'section-heading'}>What you get</h2>
      <ul className={styles['benefits-wrapper']}>
        {
          BENEFITS.map(
            (item) => (
              <li key={item.id}>
                <IoMdCheckmark
                  className={styles['check-mark']}
                />
                <p>{item.value}</p>
              </li>
            )
          )
        }
      </ul>
    </section>
  );
}

export default BenefitsSection;
