import { ValueOf } from '../shared';
import { IQuizStepData } from './data';

export interface IStepComponentProps {
  next: (data?: ValueOf<IQuizStepData>) => void;
};
