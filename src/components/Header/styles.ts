import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.section`
  display: flex;
  align-items: center;

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

  @media (max-width: 350px) {
    > b {
      font-size: 1.2rem;
    }
  }
`;

export const TabsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 45%;
  max-width: 500px;

  > a + a {
    margin-left: 10px;
  }

  > a {
    text-decoration: none;
    font-size: 300;

    position: relative;

    &::after {
      content: '';

      position: absolute;
      bottom: -1px;
      left: 0;

      display: none;

      width: 35px;
      height: 2px;

      background: var(--color-green);
    }

    &:hover {
      color: var(--color-green);

      transition: 0.3s;

      &::after {
        content: '';

        position: absolute;
        bottom: -1px;
        left: 0;

        display: inline-block;

        width: 35px;
        height: 2px;

        background: var(--color-white);

        transition: 1s;
      }
    }

    @media (max-width: 699px) {
      display: none;
    }
  }
`;
