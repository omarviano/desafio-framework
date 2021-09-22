import React from 'react';
import _ from 'lodash';

import Input from 'components/Input';

import { Container, LabelField, Label, ErrorMessage } from './styles';
import { FieldProps } from './props';

const Field: React.FC<FieldProps> = ({
  id,
  name,
  register,
  rules,
  label,
  type = 'text',
  errors,
  visible = true,
  className = '',
  style,
  ...rest
}) => {
  const errorMessage = _.get(errors, name);

  return (
    <Container visible={visible} className={`field ${className}`} style={style}>
      <LabelField inputType={type}>
        {label && (
          <Label htmlFor={id} inputType={type}>
            {label}
          </Label>
        )}

        <Input
          id={id}
          {...register(name, {
            ...rules,
          })}
          type={type}
          {...rest}
        />
      </LabelField>

      {errors && errorMessage?.message && (
        <ErrorMessage>{errorMessage?.message}</ErrorMessage>
      )}
    </Container>
  );
};
export default Field;
