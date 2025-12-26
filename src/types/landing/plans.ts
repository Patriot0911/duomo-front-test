export interface IPlanItem {
  id: string;
  label: string;
  price: number;
  isMostPopular?: boolean;
};

export interface IPlanCardProps extends Omit<IPlanItem, 'id'> {
  isSelected: boolean;
  select: () => void;
};
