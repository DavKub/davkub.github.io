import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Sample from './components/Sample';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <section>
          <Switch>
            <Route exact path='/sample' component={Sample} />
          </Switch>
        </section>
      </Router>
    </Fragment>
  );
}

export default App;
