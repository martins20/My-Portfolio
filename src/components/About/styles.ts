import styled from 'styled-components';

export const Container = styled.main`
  display: grid;

  grid-template-columns: 1fr 3.5fr;
  align-items: center;

  height: 100vh;

  @media (max-width: 700px) {
    display: flex;

    flex-direction: column;
  }
`;

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  @media (max-width: 700px) {
    width: 100%;

    margin-bottom: 60px;
  }
`;

export const PhotoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  border: 2px solid var(--color-green);
  overflow: hidden;

  padding: 5px;

  > img {
    width: 100px;
    height: 100px;

    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ProfileInfoContainer = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-top: 10px;

  > b {
    font-size: 1rem;
  }
`;

export const IconsContainer = styled.section`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-top: 15px;
  width: 100%;

  > svg {
    color: var(--color-green);

    cursor: pointer;

    &:hover {
      color: var(--color-light-green);
      transform: translateY(-3px);
    }

    transition: 0.3s;
  }
`;

export const AboutProfileContainer = styled.section`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  & > b {
    margin-bottom: 20px;
  }

  > p + p {
    margin-top: 20px;
  }

  @media (max-width: 700px) {
    & > b {
      align-self: center;
    }

    > p {
      text-align: justify;
    }
  }
`;

export const AboutTitle = styled.section`
  display: flex;
  align-items: center;

  > b {
    text-transform: uppercase;

    margin-left: 10px;
    font-size: 1.3rem;
    line-height: 1.3rem;
  }

  margin-bottom: 20px;

  @media (max-width: 700px) {
    align-self: center;
  }
`;
