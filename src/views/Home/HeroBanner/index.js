import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Row } from 'reactstrap';

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Row>
      <Col>
        <Slider {...settings}>
          <div>
            <img
              src='https://i.pinimg.com/originals/f0/f5/a6/f0f5a6cc6bff547d2c7d5cbcb00bea85.png'
              alt=''
              className='w-100'
              style={{ maxHeight: 400 }}
            />
          </div>
          <div>
            <img
              src='https://i.pinimg.com/originals/fe/e8/53/fee853e1bf032c6fdc7b7a8b3e576e94.jpg'
              alt=''
              className='w-100'
              style={{ maxHeight: 400 }}
            />
          </div>
          <div>
            <img
              src='https://www.motorcyclefair.com/images/brands-banner/walton-bike-banner.jpg'
              alt=''
              className='w-100'
              style={{ maxHeight: 400 }}
            />
          </div>
        </Slider>
      </Col>
    </Row>
  );
};

export default HeroBanner;
