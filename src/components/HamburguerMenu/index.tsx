import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import useHamburgerMenu from '../../hooks/HamburguerMenu';
import { HamburguerMenuCloseIcon } from '../../styles/icons';

import { Container, Header, StyledLink, LinksContainer } from './styles';

const HamburguerMenu: React.FC = () => {
  const { toggleHamburguerMenu } = useHamburgerMenu();

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
      <Header>
        <HamburguerMenuCloseIcon onClick={toggleHamburguerMenu} />
      </Header>

      <LinksContainer>
        <StyledLink to="skills" isActive={handleActiveLink('skills')}>
          Skills
        </StyledLink>
        <StyledLink to="projects" isActive={handleActiveLink('projects')}>
          Projects
        </StyledLink>
        <StyledLink to="contact" isActive={handleActiveLink('contact')}>
          Contact
        </StyledLink>
      </LinksContainer>
    </Container>
  );
};

export default HamburguerMenu;
