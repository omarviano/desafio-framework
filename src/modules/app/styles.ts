import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${colors.lightGray};
`;

export const Sidebar = styled.nav`
  background-color: ${colors.primary};
  padding: 16px 0;
  position: relative;
  width: 240px;
  height: 100%;

  svg {
    display: block;
    margin: 0 auto 32px;
  }

  a {
    display: block;
    width: 90%;
    margin: auto;
    padding: 8px 24px;
    text-decoration: none;
    color: ${colors.white};
    font-weight: 600;
    border-radius: 8px;

    &.active,
    &:focus,
    &:hover {
      background: ${colors.lightGray};
      color: ${colors.primary};
    }

    & + a {
      margin-top: 16px;
    }
  }
`;

export const Page = styled.div`
  flex: 1;
  height: 100%;
  overflow: auto;
  padding: 4%;
`;
