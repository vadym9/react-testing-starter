import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import Navigation from './Navigation';
import Routes from './Routes';

const Router = () => (
  <BrowserRouter>
    <Navigation />
    <Routes />
  </BrowserRouter>
)

export default Router;
