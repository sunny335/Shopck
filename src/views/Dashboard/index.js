import React, { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Sidebar from './Sidebar';

import products from './PostsList';
import SignUp from './SignUp'


const DashboardRoutes = () => {
  const { path } = useRouteMatch();
  return (

    <Container className="pt-8 mt-5" >
      <Row>
         <Col md={12} sm={12}>
          <h2 className='text-center mb-3 py-2 text-white' style={{backgroundColor:'#FD3C71 '}}>Admin Dashboard</h2>
        </Col>
        <Col lg={3} md={12} sm={12}>
          <Sidebar />
        </Col>
        <Col lg={9} md={12} sm={12} className="px-4" className='products'>
          <Switch>
            <Route
              exact
              path={`${path}`}
              component={products}

            />
            <Route
              exact
              path={`${path}/signup`}
              component={SignUp}
            />
          </Switch>
        </Col>
      </Row>
    </Container>

  );
};

export default DashboardRoutes;
