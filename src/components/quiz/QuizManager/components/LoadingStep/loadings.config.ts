import type { IListItem } from '@/types/shared';

export const LOADING_DURATION = 500;

export const LOADINGS: IListItem[] = [
  {
    id: 'goals',
    value: 'Aligning with your goals',
  },
  {
    id: 'answers',
    value: 'Reviewing your answers',
  },
  {
    id: 'bible',
    value: 'Picking Bible verses and prayers for you',
  },
  {
    id: 'plan',
    value: 'Finalizing your personalized plan',
  },
] as const;
