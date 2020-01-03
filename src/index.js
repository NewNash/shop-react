import React from 'react';
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'


import reducer from "./store";
import rootsaga from "./saga";
import App from './App';

import './index.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware,logger)
)

sagaMiddleware.run(rootsaga)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
