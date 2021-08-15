import React from 'react';
import { Container } from 'reactstrap';

import HeroSection from './HeroSection';
import CategorySlider from './CategorySlider';
import Location from '../../component/Location/Location.js';
import ProductCards from '../../container/ProductCards';

const index = () => {
  return (
    <main style={{ background: '#F7F8F7' }}>
      <Container>
        <HeroSection />
        <CategorySlider />
        <Location />
        <ProductCards />
      </Container>
    </main>
  );
};

export default index;
