export interface ICommentItem {
  id: string;
  date: Date;
  author: string;
  rating: number;
  comment: string;
};

export type TCommentCardProps = Omit<ICommentItem, 'id'>;
