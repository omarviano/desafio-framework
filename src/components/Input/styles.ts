import styled, { css } from 'styled-components';

import CheckIcon from 'assets/img/check.png';
import colors from 'styles/colors';

interface AltInputProps {
  type: React.HTMLInputTypeAttribute;
}

export const Container = styled.div``;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  padding: 8px 16px;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
    border-color: ${colors.primary};
  }
  &:read-only,
  &:disabled {
    background: #f9f9f9;
    border-color: #ddd;
  }
  ${({ type }) =>
    (type === 'checkbox' || type === 'radio') &&
    css`
      position: absolute;
      opacity: 0;
    `};
`;

export const AltInput = styled.label<AltInputProps>`
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border: 2px solid
    ${props => (props.type === 'checkbox' ? colors.primary : '#BEBEBE')};
  border-radius: ${props => (props.type === 'checkbox' ? '3px' : '50%')};
  cursor: pointer;
  background: #fff;
  cursor: pointer;
  input:disabled + & {
    background: #eee;
    border-color: #ccc;
  }
  input:focus + & {
    outline: 2px solid ${colors.primary};
  }
  &.radio-alt {
    input:checked + &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 10px;
      height: 10px;
      margin: auto;
      background-color: ${colors.primary};
      border-radius: 50%;
    }
  }
  &.checkbox-alt {
    input:checked + & {
      background: url(${CheckIcon});
      background-position: center;
      background-size: 10px;
      background-repeat: no-repeat;
      background-color: ${colors.primary};
    }
  }
`;
