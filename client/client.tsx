import * as React from 'react';
import App from './components/App/App'
import  { hydrate }  from 'react-dom';

hydrate(
  <App />,
  document.getElementById('root'),
);
