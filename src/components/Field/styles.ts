import styled, { css } from 'styled-components';

interface ContainerProps {
  visible: boolean;
}
interface Appearence {
  inputType: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: ${props => (props.visible ? 'block' : 'none')};
  ${props =>
    props.visible &&
    css`
      & + div.field {
        margin-top: 16px;
      }
    `}
`;

export const LabelField = styled.div<Appearence>`
  ${({ inputType }) =>
    (inputType === 'checkbox' || inputType === 'radio') &&
    css`
      display: flex;
      flex-direction: row;
    `}
`;

export const Label = styled.label<Appearence>`
  display: inline-block;
  margin-bottom: 5px;
  ${({ inputType }) =>
    (inputType === 'checkbox' || inputType === 'radio') &&
    css`
      margin: 0 16px 0 0;
    `}
`;

export const ErrorMessage = styled.div`
  margin-top: 8px;
  color: #fe3563;
`;
