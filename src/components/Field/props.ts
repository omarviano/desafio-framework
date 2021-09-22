import { InputHTMLAttributes } from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  label?: string;
  errors?: DeepMap<FieldValues, FieldError>;
  visible?: boolean;
  style?: React.CSSProperties;
}
