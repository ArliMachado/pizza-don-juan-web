import React from 'react';

import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store/index';

import GlobalStyles from './styles/global';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>
);

export default App;
