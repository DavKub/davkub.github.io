import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Sample from './components/Sample';
import Landing from './components/Landing';

import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <section className='container'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/sample' component={Sample} />
          </Switch>
        </section>
      </Router>
    </Fragment>
  );
}

export default App;
