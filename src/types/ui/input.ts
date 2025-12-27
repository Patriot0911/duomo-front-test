export type TValidationType = 'required' | 'email' | 'minLength' | 'maxLength';

export type TValidationRule ={ type: TValidationType; message: string; value?: string | number; };

export type TValidator = (value: string, rule: TValidationRule) => boolean;

export type IInputMeta = {
  touched: boolean;
  filled: boolean;
  valid: boolean;
  error: string | null;
};

export interface IInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  value?: string;
  defaultValue?: string;
  validation?: TValidationRule[];
  onChange?: (value: string, meta: IInputMeta) => void;
}
