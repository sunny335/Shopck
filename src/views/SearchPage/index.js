import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Button } from 'reactstrap';
import Location from '../../component/Location/Location';
import ProductNotFound from '../../component/ProductNotFound';
const SearchPage = () => {
  const [Click, setClick] = useState(false);
  return (
    <div className='search-page'>
      <Container>
        <Row>
          <Col sm={12} className='bread-cramb'>
            <h6>
              <Link to='/'>Home ></Link>
            </h6>
            <h1>Ads in Fashion & Accessories</h1>
            <p>
              Buy & sell second hand fashion & accessories across the UK.
              Discover beautiful luxury designer brands, clothes, shoes, boots,
              jackets, pants and much more - for sale up to 90 % off.
            </p>
          </Col>
          <Col md={12}>
            <div className='filter-btn'>
              <ul>
                <li>
                  <Location />
                </li>
                <li>
                  <Button onClick={() => setClick(!Click)}>
                    Condition
                    <svg
                      viewBox='0 0 16 16'
                      class='SVG__IconSVG-sc-741qml-0 jmSzln'
                      className={`${Click && 'clicked'}`}
                    >
                      <path
                        d='M2 5l6 6 6-6'
                        stroke='currentColor'
                        fill='none'
                        fill-rule='evenodd'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setClick(!Click)}>
                    price
                    <svg
                      viewBox='0 0 16 16'
                      class='SVG__IconSVG-sc-741qml-0 jmSzln'
                      className={`${Click && 'clicked'}`}
                    >
                      <path
                        d='M2 5l6 6 6-6'
                        stroke='currentColor'
                        fill='none'
                        fill-rule='evenodd'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setClick(!Click)}>
                    Date Listed
                    <svg
                      viewBox='0 0 16 16'
                      class='SVG__IconSVG-sc-741qml-0 jmSzln'
                      className={`${Click && 'clicked'}`}
                    >
                      <path
                        d='M2 5l6 6 6-6'
                        stroke='currentColor'
                        fill='none'
                        fill-rule='evenodd'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </Button>
                </li>
                <li>
                  <Button onClick={() => setClick(!Click)}>
                    Short
                    <svg
                      viewBox='0 0 16 16'
                      class='SVG__IconSVG-sc-741qml-0 jmSzln'
                      className={`${Click && 'clicked'}`}
                    >
                      <path
                        d='M2 5l6 6 6-6'
                        stroke='currentColor'
                        fill='none'
                        fill-rule='evenodd'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </Button>
                </li>
                <li>
                  <Button className='clear-btn'>Clear all</Button>
                </li>
              </ul>
            </div>
          </Col>
          <ProductNotFound />
        </Row>
      </Container>
    </div>
  );
};

export default SearchPage;
