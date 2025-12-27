'use client';

import { useState } from 'react';
import { STEPS } from '../steps.config';

const QuizManager = () => {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [data, setData] = useState<Record<string, any>>({});

  const currentStep = STEPS[stepIndex];

  const next = (partialData: Record<string, any> = {}) => {
    if (stepIndex == STEPS.length-1) {
      // finish action
    };

    setData((prev) => ({
      ...prev,
      [currentStep.id]: partialData,
    }));
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
