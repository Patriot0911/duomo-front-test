export interface IListItem {
  id: string;
  value: string | number;
};

export type ValueOf<T> = T[keyof T];
