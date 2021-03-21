import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface IStyledLinkProps {
  isActive?: boolean;
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  height: 100vh;
  padding: 10px;

  width: 150px;

  position: absolute;
  top: 0;
  right: 0;

  padding: 30px;

  background: var(--color-darkGray);
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
`;

export const LinksContainer = styled.main`
  display: flex;
  flex-direction: column;

  margin-top: 30px;

  > a + a {
    margin-top: 20px;
  }
`;

export const StyledLink = styled(RouterLink)<IStyledLinkProps>`
  text-decoration: none;
  font-size: 300;

  position: relative;

  text-align: end;

  &:hover {
    color: var(--color-green);

    transition: 0.3s;

    &::after {
      content: '';

      position: absolute;
      bottom: -1px;
      left: 0;

      width: 35px;
      height: 2px;

      background: var(--color-green);

      transition: 1s;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::after {
        content: '';

        position: absolute;
        bottom: -1px;
        left: 0;

        width: 35px;
        height: 2px;

        background: var(--color-green);
      }
    `}
`;
