/* eslint-disable import/extensions */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../store/store.js';
import AppContainer from './containers/AppContainer';
import retrieve from './retrieve.js';

// import hello from "./images/helloworld.gif"; // how to import images

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
);

retrieve();
