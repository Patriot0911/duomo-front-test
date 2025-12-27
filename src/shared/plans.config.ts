import type { IPlanItem } from '@/types/landing/plans';

export const PLANS_LIST: IPlanItem[] = [
  {
    id: '1mon',
    label: '1-Month Plan',
    time: 1,
    price: 10,
  },
  {
    id: '3mon',
    label: '3-Month Plan',
    time: 3,
    price: 30,
    isMostPopular: true,
  },
  {
    id: '6mon',
    label: '6-Month Plan',
    time: 6,
    price: 60,
  },
] as const;
