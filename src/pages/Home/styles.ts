import styled from 'styled-components';

export const Container = styled.main`
  display: flex;

  flex-direction: column;
  flex: 1;

  width: 100%;
  height: 100%;

  padding: 50px;

  @media (max-width: 700px) {
    padding: 30px;
  }
`;
