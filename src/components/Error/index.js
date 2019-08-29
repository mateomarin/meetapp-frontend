import React from 'react';

import { Container } from './styles';

export default function Error({ msg, show }) {
  if (!show) {
    return null;
  }
  return <Container>{msg}</Container>;
}
