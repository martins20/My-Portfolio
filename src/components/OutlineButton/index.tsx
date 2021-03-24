import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IOutLineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const OutlineButton: React.FC<IOutLineButtonProps> = ({ label, ...rest }) => {
  return (
    <Container {...rest}>
      <b>{label}</b>
    </Container>
  );
};

export default OutlineButton;
