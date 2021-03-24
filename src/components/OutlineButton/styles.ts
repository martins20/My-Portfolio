import styled from 'styled-components';

export const Container = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  background: transparent;

  border: 1px solid var(--color-green);
  border-radius: 5px;

  padding: 10px 30px;

  font-size: 1.2rem;
  text-transform: uppercase;
  color: var(--color-green);

  &:hover {
    border-color: var(--color-white);
    color: var(--color-white);

    transform: translateY(-1px);
  }

  &:active {
    border-color: transparent;
    color: var(--color-white);

    background: var(--color-green);
  }

  transition: 0.2s;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;
