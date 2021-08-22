import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Row } from 'reactstrap';
import image1 from '../../../assets/img/slider1.jpg';
const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Row className='hero-banner'>
      <Col>
        <Slider {...settings}>
          <div style={{ maxHeight: 400 }} className='slider-items'>
            <img src={image1} alt='' className='w-100' />
          </div>
          <div style={{ maxHeight: 400 }} className='slider-items'>
            <img
              src='https://i.pinimg.com/originals/fe/e8/53/fee853e1bf032c6fdc7b7a8b3e576e94.jpg'
              alt=''
              className='w-100'
            />
          </div>
          <div style={{ maxHeight: 400 }} className='slider-items'>
            <img
              src='https://www.motorcyclefair.com/images/brands-banner/walton-bike-banner.jpg'
              alt=''
              className='w-100'
            />
          </div>
        </Slider>
      </Col>
    </Row>
  );
};

export default HeroBanner;
