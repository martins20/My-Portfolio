import styled from 'styled-components';

export const Container = styled.main`
  display: flex;

  flex-direction: column;
  flex: 1;

  height: 100vh;
  width: 100%;

  padding: 10px;

  scroll-snap-type: y mandatory;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 700px) {
    padding: 20px;

    > section {
      margin: 50px 0;
    }
  }
`;
