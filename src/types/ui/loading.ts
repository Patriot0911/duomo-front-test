export type TLoadingType = 'tick' | 'count';

export interface ICircularLoadingProps {
  duration: number;
  autoStart?: boolean;
  type: TLoadingType;
  size?: TLoadingSize;
  color?: string;
  lineCap?: 'round' | 'square';
  onComplete?: () => void;
};

export type TLoadingSize =
  | number
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl';

