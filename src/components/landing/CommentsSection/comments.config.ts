import type { ICommentItem } from '@/types/landing/comments';

export const COMMENTS: ICommentItem[] = [
  {
    id: '01',
    author: 'Guadalupe Hudson',
    rating: 5,
    comment: 'All I want to know if you are working on another agent A game or chapters. Loved this game!',
    date: new Date('2 January 2024'),
  },
  {
    id: '02',
    author: 'Bobby Wintheiser',
    rating: 5,
    comment: 'I’ve played this over and over and I love it!',
    date: new Date('27 December 2023'),
  },
  {
    id: '03',
    author: 'Colleen Beahan',
    rating: 5,
    comment: 'Soooo fun I recommend. Easy and fun I thought it was a little challenging but if it wasn’t it would not be fun I recommend',
    date: new Date('19 December 2023'),
  },
] as const;
