import type { ISectionProps } from '@/types/landing/sections';
import CommentCard from './components/CommentCard';
import { COMMENTS } from './comments.config';

import styles from './styles.module.scss';

const CommentsSection = ({ id, }: ISectionProps) => {
  return (
    <section id={id ?? 'comments-section'} className={styles['comments-section']}>
      <h2 className={'section-heading'}>Users love App!</h2>
      <div className={styles['comments-list']}>
        {
          COMMENTS.map(
            (item) => (
              <CommentCard
                key={item.id}
                {...item}
              />
            )
          )
        }
      </div>
    </section>
  );
}

export default CommentsSection;
