import type { ICommentCardProps } from '@/types/landing/comments';
import formatDate from '@/libs/utils/formatDate';
import { IoStar } from 'react-icons/io5';

import styles from './styles.module.scss';

const CommentCard = ({ author, comment, date, rating, }: ICommentCardProps) => {
  return (
    <div className={styles['comment-card']}>
      <div className={styles['top-wrapper']}>
        <div className={styles['commentator-info']}>
          <span className={styles['name']}>{author}</span>
          <span className={styles['postedAt']}>{formatDate(date)}</span>
        </div>
        <div className={styles['rating-wrapper']}>
          {
            [...new Array(rating)].map(
              (_, index) => (
                <IoStar
                  key={`star-${index}`}
                  className={styles['rating']}
                />
              )
            )
          }
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
}

export default CommentCard;
