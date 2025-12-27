'use client';

import type { IQuizStepData } from '@/types/quiz/data';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { STEPS } from '../steps.config';
import { CONTACT_FORM_KEY } from './components/ContactFormStep';

const QuizManager = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [data, setData] = useState<IQuizStepData>({});

  const currentStep = STEPS[stepIndex];

  const next = (partialData: Record<string, any> = {}) => {
    setData((prev) => ({
      ...prev,
      [currentStep.id]: partialData,
    }));
    if (stepIndex === STEPS.length-1) {
      const body = {
        email: data[CONTACT_FORM_KEY]?.email,
        planId: params.get('id'),
      };
      fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify(body)
      }).then(() => router.push('/'));
      return;
    };

    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  };

  const StepComponent = currentStep.Component;

  return (
    <StepComponent
      next={next}
    />
  );
}

export default QuizManager;
