import React from 'react';

import { Container, Wrapper } from './styles';

import Header from '../Header';
import Product from '../Product';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <Container>
     <Header />

      <Wrapper>
        <Product />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Layout;
