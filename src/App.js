import React, { Fragment } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import New from './components/New';
import Top from './components/Top';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Fragment>
            <Route exact path = '/' component = {New} />
            <Route exact path = '/new' component = {New} />
            <Route exact path = '/top' component = {Top} />
          </Fragment>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
