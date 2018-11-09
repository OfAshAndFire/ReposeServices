import 'semantic-ui-css/semantic.min.css';
import './index.css';

import { ApolloProvider } from 'react-apollo';
import client from './Apollo';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Application = (
  <ApolloProvider client={client}>
    <App client={client} />
  </ApolloProvider>
);

ReactDOM.render(Application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
