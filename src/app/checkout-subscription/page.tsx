import { QuizManager, QuizSection } from '@/components/quiz';
import { Suspense } from 'react';

const CheckoutSubscription = () => {
  return (
    <QuizSection>
      <Suspense>
        <QuizManager />
      </Suspense>
    </QuizSection>
  );
}

export default CheckoutSubscription;
