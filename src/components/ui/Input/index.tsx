'use client';

import { useId, useState } from 'react';
import { cn } from '@/libs/cn';
import type { IInputProps, } from '@/types/ui/input';
import validate from '@/libs/utils/validate';

import styles from './styles.module.scss';

const Input = ({
  label,
  value: controlledValue,
  defaultValue = '',
  validation,
  onChange,
  disabled,
  ...rest
}: IInputProps) => {
  const id = useId();
  const isControlled = controlledValue !== undefined;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const [touched, setTouched] = useState(false);
  const [focused, setFocused] = useState(false);

  const value = isControlled ? controlledValue : internalValue;

  const error = touched ? validate(value, validation) : null;
  const filled = value.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (!isControlled) {
      setInternalValue(val);
    }

    onChange?.(val, {
      touched,
      filled: val.length > 0,
      valid: !validate(val, validation),
      error: validate(val, validation),
    });
  };

  return (
    <div
      className={cn(
        styles.input,
        filled && styles.filled,
        focused && styles.focused,
        error && styles.error,
        disabled && styles.disabled
      )}
    >
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <div className={styles.control}>
        <input
          id={id}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          onFocus={() => setFocused(true)}
          onBlurCapture={() => setFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={styles.field}
          {...rest}
        />
      </div>

      {error && (
        <div id={`${id}-error`} role="alert" className={styles.message}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
