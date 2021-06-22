import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './pages/Search';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Route exact path='/' component={Search} />
      </Router>
    </Fragment>
  );
};

export default App;
