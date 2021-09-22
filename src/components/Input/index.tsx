import React from 'react';

import { Container, Input as InputElem, AltInput } from './styles';

import { InputProps } from './props';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, type = 'text', ...res }, ref) => {
    return (
      <Container>
        <InputElem ref={ref} id={id} name={name} type={type} {...res} />

        {(type === 'radio' || type === 'checkbox') && (
          <AltInput htmlFor={id} type={type} className={`${type}-alt`} />
        )}
      </Container>
    );
  },
);

export default Input;
