import type { ISectionWithContentProps } from '@/types/landing/sections';

import styles from './styles.module.scss';

const QuizSection = ({ id, children }: ISectionWithContentProps) => {
  return (
    <section id={id ?? 'quiz-section'} className={styles['quiz-section']}>
      {children}
    </section>
  );
}

export default QuizSection;
