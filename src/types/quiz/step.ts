import { ValueOf } from '../shared';
import { IQuizStepData } from './data';

export interface IStepComponentProps {
  next: (data?: Record<string, ValueOf<IQuizStepData>>) => void;
};
