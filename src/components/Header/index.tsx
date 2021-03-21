import React from 'react';
import { Link } from 'react-router-dom';
import { HamburguerMenu } from '../../styles/icons';

import { Container, Logo, TabsContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <b>{`<`}</b>
        <b>martins20</b>
        <b>{`/>`}</b>
      </Logo>

      <TabsContainer>
        <Link to="about">About me</Link>
        <Link to="skills">Skills</Link>
        <Link to="projects">Projects</Link>
        <Link to="contact">Contact</Link>
      </TabsContainer>

      <HamburguerMenu />
    </Container>
  );
};

export default Header;
