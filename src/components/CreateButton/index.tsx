import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

const CreateButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return <Button {...rest}>{children}</Button>;
};

export default CreateButton;
