'use client';

import type { IStepComponentProps } from '@/types/quiz/step';
import type { IInputMeta, TValidationRule } from '@/types/ui/input';
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

import styles from './styles.module.scss';

export const CONTACT_FORM_KEY = 'contact-form';

const ContactFormStep = ({ next, }: IStepComponentProps) => {
  const [email, setEmail] = useState<undefined | string>(undefined);
  const [isValid, setIsValid] = useState<boolean>(false);

  const validation: TValidationRule[] = [
    { type: 'email', message: 'Please enter a valid email address', },
    { type: 'required', message: 'This field is required', },
    { type: 'minLength', message: `Minimum length is ${3} characters`, value: 3 } // можна було б винести значення "3"
  ];

  const changeHandle = (state: string, { valid, }: IInputMeta) => {
    setEmail(state);
    setIsValid(!!valid);
  };

  return (
    <div className={styles['contact-step-block']}>
      <div className={styles['top-section']}>
        <h2 className={'section-heading'}>Enter your email to get<br/> your personalised<br/> Spiritual Growth Plan</h2>
        <Input
          value={email}
          onChange={changeHandle}
          label={'Email'}
          validation={validation}
        />
      </div>
      <Button
        onClick={() => next({ email, })}
        disabled={!isValid}
      >
        Continue
      </Button>
    </div>
  );
}

export default ContactFormStep;
