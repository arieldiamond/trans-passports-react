import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import App from './components/app';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(promise, logger)(createStore);

ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}>
   <App />
 </Provider>
 , document.querySelector('.container'));
