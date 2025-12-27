export type TValidationLen = { type: 'minLength' | 'maxLength'; value: number; message: string };

export type TValidationRule =
  | { type: 'required'; message: string }
  | { type: 'email'; message: string }
  | TValidationLen;

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
