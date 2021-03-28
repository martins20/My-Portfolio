import React, { useCallback } from 'react';

import OutlineButton from '../OutlineButton';

import {
  Container,
  GreetingsInfo,
  Profession,
  IlustrationContainer,
} from './styles';

import programmer from '../../assets/programmer.svg';

import portugueseResume from '../../assets/portugues.pdf';
// import englishResume from '../../assets/english.pdf';

const Greetings: React.FC = () => {
  const handleOpenResume = useCallback(() => {
    window.open(portugueseResume);
    // window.open(englishResume);
  }, []);

  return (
    <Container>
      <GreetingsInfo>
        <Profession>Desenvolvedor FullStack</Profession>
        <h1>Paulo César Martins</h1>
        <p>
          Olá, tenho 20 anos e sou um desenvolvedor de software FullStack. Uso
          Typescript e Javascript como minha linguagem de programação principal
          e todas as tecnologias de ambiente javascript, como ReactJS, React
          Native e NodeJS.
        </p>

        <OutlineButton label="Ver Currículo" onClick={handleOpenResume} />
      </GreetingsInfo>

      <IlustrationContainer>
        <img src={programmer} alt="programmer" />
      </IlustrationContainer>
    </Container>
  );
};

export default Greetings;
