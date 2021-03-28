import React, { useCallback } from 'react';
import { GitHubIcon, MailIcon, LinkedinIcon } from '../../styles/icons';
import SquareIcon from '../SquareIcon';

import {
  AboutProfileContainer,
  Container,
  PhotoContainer,
  ProfileContainer,
  ProfileInfoContainer,
  IconsContainer,
  AboutTitle,
} from './styles';

type RedirectOptions = 'github' | 'linkedin' | 'email';

const About: React.FC = () => {
  const handleRedirect = useCallback((to: RedirectOptions) => {
    switch (to) {
      case 'github':
        window.open('https://github.com/martins20');
        break;

      case 'linkedin':
        window.open('https://www.linkedin.com/in/martins20/');
        break;

      default:
        window.open('mailto:martins20.tech@gmail.com');
        break;
    }
  }, []);

  return (
    <Container>
      <ProfileContainer>
        <PhotoContainer>
          <img
            src="https://avatars.githubusercontent.com/u/55673235?v=4"
            alt="Profile"
          />
        </PhotoContainer>

        <ProfileInfoContainer>
          <b>Paulo César Martins</b>

          <IconsContainer>
            <MailIcon onClick={() => handleRedirect('email')} />
            <GitHubIcon onClick={() => handleRedirect('github')} />
            <LinkedinIcon onClick={() => handleRedirect('linkedin')} />
          </IconsContainer>
        </ProfileInfoContainer>
      </ProfileContainer>
      <AboutProfileContainer>
        <AboutTitle>
          <SquareIcon />
          <b>Sobre</b>
        </AboutTitle>

        <b>Conheça um pouco sobre mim</b>

        <p>
          Conheci a Programação no ano de 2017, e até hoje sou apaixonado pela
          área, vivo em constante aprendizado para que eu possa estar sempre
          atualizado no que o mercado exige. Atualmente estou estudando toda a
          cultura de DevOps para aprimorar meus deploys e automações podendo
          assim ser um completo FullStack.
        </p>

        <p>Entre em contato comigo !!!</p>
      </AboutProfileContainer>
    </Container>
  );
};

export default About;
