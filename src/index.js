import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';

import App from './containers/App';

import {Router, Route} from 'react-router';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('container')
);