import { TLoadingSize } from '@/types/ui/loading';

export const SIZE_TOKENS: Record<Exclude<TLoadingSize, number>, number> = {
  xs: 20,
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

export const resolveLoadingSize = (size?: TLoadingSize) => {
  if (typeof size === 'number') return size;
  if (!size) return SIZE_TOKENS.md;
  return SIZE_TOKENS[size];
};
