import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: ${colors.gray};
  border-radius: 8px;
  padding: 16px;

  & + li {
    margin-top: 16px;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const ActionsButton = styled.div`
  width: 144px;
`;

export const Button = styled.button`
  & + button {
    margin-left: 16px;
  }
`;
