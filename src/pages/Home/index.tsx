import React from 'react';

import Header from '../../components/Header';
import Greetings from '../../components/Greetings';
import About from '../../components/About';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Greetings />

        <About />
      </Container>
    </>
  );
};

export default Home;
