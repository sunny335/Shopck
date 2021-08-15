import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../src/assets/styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Fallback from 'src/components/Fallback';
// import NotFound from 'src/components/404';
// import withTitle from 'src/components/TitleComponent';

// Pages

// const Home = lazy(() => import('../Home'));

import Home from './views/Home';
import Header from '../src/component/Header'
import Footer from  '../src/component/Footer'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* Page routes */}
          <Route exact path='/' component={Home} />

          {/* Doc Page */}
        </Switch>
         <Footer />
      </Router>
    </>
  );
};

export default App;
