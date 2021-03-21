import React from 'react';

import GlobalStyle from './styles/global';

import Routes from './routes';
import HooksProvider from './hooks';

const App: React.FC = () => {
  return (
    <HooksProvider>
      <Routes />
      <GlobalStyle />
    </HooksProvider>
  );
};

export default App;
