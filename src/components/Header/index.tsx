import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import useHamburgerMenu from '../../hooks/HamburguerMenu';
import { HamburguerMenuOpenIcon } from '../../styles/icons';
import HamburguerMenu from '../HamburguerMenu';

import { Container, Logo, TabsContainer, StyledLink } from './styles';

const Header: React.FC = () => {
  const { toggleHamburguerMenu, hamburgerMenuStatus } = useHamburgerMenu();
  const { pathname } = useLocation();

  const handleActiveLink = useCallback(
    (path: string): boolean => {
      const browserPathName = pathname.replace('/', '');

      return path === browserPathName;
    },
    [pathname],
  );

  return (
    <Container>
      <Logo>
        <Link to="/">
          <b>{`<`}</b>
          <b>martins20</b>
          <b>{`/>`}</b>
        </Link>
      </Logo>

      <TabsContainer>
        <StyledLink to="skills" isActive={handleActiveLink('skills')}>
          Skills
        </StyledLink>
        <StyledLink to="projects" isActive={handleActiveLink('projects')}>
          Projects
        </StyledLink>
        <StyledLink to="contact" isActive={handleActiveLink('contact')}>
          Contact
        </StyledLink>
      </TabsContainer>

      <HamburguerMenuOpenIcon onClick={toggleHamburguerMenu} />

      {hamburgerMenuStatus && <HamburguerMenu />}
    </Container>
  );
};

export default Header;
