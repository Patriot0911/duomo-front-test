import ContactFormStep, { CONTACT_FORM_KEY } from './QuizManager/components/ContactFormStep';
import GraphStep, { GRAPH_KEY } from './QuizManager/components/GraphStep';
import LoadingStep, { LOADING_KEY } from './QuizManager/components/LoadingStep';

export const STEPS = [
  {
    id: LOADING_KEY,
    Component: LoadingStep,
  },
  {
    id: CONTACT_FORM_KEY,
    Component: ContactFormStep,
  },
  {
    id: GRAPH_KEY,
    Component: GraphStep,
  },
] as const;
