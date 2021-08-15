import React from 'react';

import { Container, Col, Row, Nav, NavItem, Button, NavLink } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import Search from '../Search';
const Header = () => {
  return (
    <header className=' header-bg sticky-top'>
      <Container>
        <Row className='align-items-center'>
          <Col className='d-flex align-items-center justify-content-between'>
            <div className=' d-flex align-items-center'>
              <img
                src='https://web3cdn.secondhandapp.com/_next/static/logotype.f00f7050feb3d511bf44ea45366d7488.svg'
                alt='logo'
                height='38px'
              />
              {/* <p className='text-muted fw-bold ms-3'>SHPOCK</p> */}
            <Search />
            </div>
            <div className='d-flex'>
            <Nav className='align-items-center  d-flex sell-now'>
              <NavItem>
                <NavLink
                  exact
                  className='nav-style  nav-link text-muted'
                  to='/shop'
                >
                  <svg
                    viewBox='0 0 24 24'
                    class='SVG__IconSVG-sc-741qml-0 jmSzln'
                  >
                    <g fill='currentColor' fill-rule='evenodd'>
                      <path d='M6.347 7l.956-1.604c.329-.552.478-.73.673-.904.196-.174.413-.297.662-.376.25-.08.48-.116 1.122-.116h4.362c.655 0 .89.038 1.144.122.254.083.473.212.67.392.198.181.346.367.666.938L17.471 7h1.915c.909 0 1.238.095 1.57.272.333.178.594.439.772.771.177.333.272.662.272 1.571v7.772c0 .909-.095 1.238-.272 1.57a1.853 1.853 0 0 1-.771.772c-.333.177-.662.272-1.571.272H4.614c-.909 0-1.238-.095-1.57-.272a1.853 1.853 0 0 1-.772-.771C2.095 18.624 2 18.295 2 17.386V9.614c0-.909.095-1.238.272-1.57.178-.333.439-.594.771-.772C3.376 7.095 3.705 7 4.614 7h1.733zm5.608 9.276c1.982 0 3.586-1.592 3.586-3.552s-1.604-3.552-3.586-3.552c-1.982 0-3.586 1.592-3.586 3.552s1.604 3.552 3.586 3.552zm0 1c-2.533 0-4.586-2.038-4.586-4.552s2.053-4.552 4.586-4.552c2.533 0 4.586 2.038 4.586 4.552s-2.053 4.552-4.586 4.552zM3.402 6.304a.5.5 0 1 1 0-1h2.005a.5.5 0 1 1 0 1H3.402z'></path>
                    </g>
                  </svg>
                  Sell Now
                </NavLink>
              </NavItem>
            </Nav>
            <ul className='button-groups d-flex align-items-center m-0 p-0'>
              <li>
                <Button>Sign Up</Button>
              </li>
              <li>
                <Button>Log In</Button>
              </li>
              <li>
                <Button>...</Button>
              </li>
            </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
