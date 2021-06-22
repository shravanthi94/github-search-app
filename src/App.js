import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
      </Router>
    </Fragment>
  );
};

export default App;
