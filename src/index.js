import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import SpaService from './services/spa-service';
import {SpaServiceProvider} from './components/spa-context';

import store from './store'


const service = new SpaService();

ReactDOM.render(
  <Provider store = {store}> 
    <ErrorBoundry>
        <SpaServiceProvider value={service}> 
        <Router>
          <App/>
        </Router>
      </SpaServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);