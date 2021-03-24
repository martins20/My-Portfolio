import React, { useCallback } from 'react';
import Header from '../../components/Header';

import programmer from '../../assets/programmer.svg';

import portugueseResume from '../../assets/portugues.pdf';
// import englishResume from '../../assets/english.pdf';

import OutlineButton from '../../components/OutlineButton';

import {
  Container,
  GreetingContainer,
  AboutContainer,
  Profession,
  IlustrationContainer,
} from './styles';

const Home: React.FC = () => {
  const handleDownloadResume = useCallback(() => {
    window.open(portugueseResume);
    // window.open(englishResume);
  }, []);

  return (
    <Container>
      <Header />

      <GreetingContainer>
        <AboutContainer>
          <Profession>Desenvolvedor FullStack</Profession>
          <h1>Paulo César Martins</h1>
          <p>
            Olá, tenho 20 anos e sou um desenvolvedor de software FullStack. Uso
            Typescript e Javascript como minha linguagem de programação
            principal e todas as tecnologias de ambiente javascript, como
            ReactJS, React Native e NodeJS.
          </p>

          <OutlineButton label="Ver Currículo" onClick={handleDownloadResume} />
        </AboutContainer>

        <IlustrationContainer>
          <img src={programmer} alt="programmer" />
        </IlustrationContainer>
      </GreetingContainer>
    </Container>
  );
};

export default Home;
