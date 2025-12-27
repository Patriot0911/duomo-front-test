import { CONTACT_FORM_KEY } from '@/components/quiz/QuizManager/components/ContactFormStep';
import { GRAPH_KEY } from '@/components/quiz/QuizManager/components/GraphStep';
import { LOADING_KEY } from '@/components/quiz/QuizManager/components/LoadingStep';

export interface IQuizStepData {
  [LOADING_KEY]?: {};
  [CONTACT_FORM_KEY]?: { email: string };
  [GRAPH_KEY]?: {};
};
