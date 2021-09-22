import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from 'styles/colors';

export const LinkButton = styled(Link)`
  display: block;
  max-width: 240px;
  margin: 8% auto;
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  padding: 24px;
  border-radius: 8px;
`;
