import styled, { css } from 'styled-components';
import { BiMenuAltRight, BiMenuAltLeft } from 'react-icons/bi';

const defaultIconStyle = css`
  font-size: 2rem;
`;

export const HamburguerMenuOpenIcon = styled(BiMenuAltRight)`
  ${defaultIconStyle};

  transition: color 0.5s;

  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    color: var(--color-green);
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export const HamburguerMenuCloseIcon = styled(BiMenuAltLeft)`
  ${defaultIconStyle};

  transition: color 0.5s;

  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    color: var(--color-green);
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
