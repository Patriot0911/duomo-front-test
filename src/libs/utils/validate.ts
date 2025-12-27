import type { TValidationRule, TValidator } from '@/types/ui/input';

export const validators: Record<TValidationRule['type'], TValidator> = {
  'required': (value: string, _: TValidationRule) => !value.trim(),
  'email': (value: string, _: TValidationRule) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  'minLength': (value: string, rule: TValidationRule) => !value.length || value.length < (<number> rule.value),
  'maxLength': (value: string, rule: TValidationRule) => value.length > (<number> rule.value),
};

const validate = (value: string, rules?: TValidationRule[]) => {
  if (!rules) return null;

  for (const rule of rules) {
    const validator = validators[rule.type];
    if (!validator) throw new Error(`Cannot find validator for: ${rule.type}`);
    if (!validator(value, rule)) continue;
    return rule.message;
  }

  return null;
};

export default validate;
