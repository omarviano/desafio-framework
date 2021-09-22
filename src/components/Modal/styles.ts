import styled from 'styled-components';
import colors from 'styles/colors';

export const ModalTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 36px;
`;

export const CloseModalButton = styled.button`
  position: sticky;
  padding: 16px;
  top: 16px;
  float: right;
  margin-top: -52px;
  margin-right: -48px;
  right: -20px;
  border-radius: 10px;
  z-index: 2;
  border: none;
  background: ${colors.primary};
  color: ${colors.white};
  cursor: pointer;
`;
