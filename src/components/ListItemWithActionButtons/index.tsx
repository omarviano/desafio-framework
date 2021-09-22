import React from 'react';

import { Container, Content, ActionsButton, Button } from './styles';
import { ListItemWithActionButtonsProps } from './props';

const ListItemWithActionButtons: React.FC<ListItemWithActionButtonsProps> = ({
  children,
  onClickEdit,
  onClickDelete,
}) => {
  return (
    <Container>
      <Content>{children}</Content>
      <ActionsButton>
        <Button onClick={onClickEdit}>Editar</Button>
        <Button onClick={onClickDelete}>Deletar</Button>
      </ActionsButton>
    </Container>
  );
};

export default ListItemWithActionButtons;
