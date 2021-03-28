import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface IStyledLinkProps {
  isActive?: boolean;
}

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.section`
  display: flex;
  align-items: center;

  > a {
    text-decoration: none;

    > b {
      &:first-child,
      &:last-child {
        color: var(--color-green);
      }

      &:nth-child(2) {
        margin: 0 5px;
      }

      font-size: 1.5rem;
    }
  }

  @media (max-width: 350px) {
    > a > b {
      font-size: 1.2rem;
    }
  }
`;

export const TabsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 35%;
  max-width: 400px;

  @media (max-width: 699px) {
    display: none;
  }
`;

export const StyledLink = styled(RouterLink)<IStyledLinkProps>`
  > & + a {
    margin-left: 10px;
  }

  text-decoration: none;
  font-size: 300;

  position: relative;

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
