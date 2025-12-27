import type { TValidationLen, TValidationRule } from '@/types/ui/input';

export const validators = {
  'required': (value: string, _: TValidationRule) => !value.trim(),
  'email': (value: string, _: TValidationRule) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  'minLength': (value: string, rule: TValidationLen) => !value.length || value.length < rule.value,
  'maxLength': (value: string, rule: TValidationLen) => value.length > rule.value,
};

const validate = (value: string, rules?: TValidationRule[]) => {
  if (!rules) return null;

  for (const rule of rules) {
    const validator = validators[rule.type];
    if (!validator) throw new Error(`Cannot find validator for: ${rule.type}`);
    if (!validator(value, rule as any)) continue;
    return rule.message;
  }

  return null;
};

export default validate;
