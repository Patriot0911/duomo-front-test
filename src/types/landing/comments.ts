export interface ICommentItem {
  id: string;
  date: Date;
  author: string;
  rating: number;
  comment: string;
};

export interface ICommentCardProps extends Omit<ICommentItem, 'id'> {};
