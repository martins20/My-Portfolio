import React from 'react';

import Greetings from '../../components/Greetings';
import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Greetings />
    </Container>
  );
};

export default Home;
