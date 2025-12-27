import { CONTACT_FORM_KEY } from '@/components/quiz/QuizManager/components/ContactFormStep';

export interface IQuizStepData {
  [CONTACT_FORM_KEY]?: { email: string };
};
