import React from 'react';

import { Container } from '@material-ui/core';
import PrimarySearchAppBar from '../Navbar/Nabar';

export const Wrapper: React.FC<React.ReactNode> = (props) => {
  return (
    <Container maxWidth="lg">
      <PrimarySearchAppBar />
      {props.children}
    </Container>
  )
}

export default Wrapper;
