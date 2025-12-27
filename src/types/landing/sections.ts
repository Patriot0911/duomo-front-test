import type { PropsWithChildren } from 'react';

export interface ISectionProps {
  id?: string;
};

export interface ISectionWithContentProps extends ISectionProps, PropsWithChildren {};
