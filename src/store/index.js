import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '../routes/history';
import rootReducer from './ducks';
import rootSaga from './sagas';

const DEVELOPMENT = process.env.NODE_ENV === 'development';

const sagaMonitor = DEVELOPMENT ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [routerMiddleware(history), sagaMiddleware];

const composer = DEVELOPMENT
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);
sagaMiddleware.run(rootSaga);

export default store;
