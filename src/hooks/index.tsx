import React from 'react';
import { HamburguerMenuProvider } from './HamburguerMenu';

const HooksProvider: React.FC = ({ children }) => (
  <HamburguerMenuProvider>{children}</HamburguerMenuProvider>
);

export default HooksProvider;
