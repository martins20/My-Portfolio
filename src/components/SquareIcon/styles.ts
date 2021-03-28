import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px;

  border: 2px solid var(--color-green);

  > div {
    width: 5px;
    height: 5px;
    background: var(--color-green);
  }
`;
