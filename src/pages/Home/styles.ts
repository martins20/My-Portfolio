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

export const GreetingContainer = styled.section`
  display: grid;

  grid-template-columns: 1fr 1fr;

  margin-top: 100px;

  border: 1px solid red;

  padding: 0 20px;

  @media (max-width: 1000px) {
    display: flex;

    flex-direction: column;
    padding: 0;
  }
`;

export const GreetingsInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > h1 {
    font-size: 3rem;
    line-height: 3rem;

    margin-top: 5px;
  }

  > p {
    font-weight: 300;
    margin-top: 15px;

    color: var(--color-white);

    text-align: left;
  }

  > button {
    margin-top: 20px;
  }

  @media (max-width: 700px) {
    > h1 {
      font-size: 2rem;
      line-height: 2rem;
    }
  }
`;

export const Profession = styled.b`
  font-size: 0.8rem;
  line-height: 0.8rem;

  text-transform: uppercase;
  color: var(--color-green);

  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;

export const IlustrationContainer = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  > img {
    min-width: 350px;
    width: calc(100% - 350px);
    max-width: 500px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
