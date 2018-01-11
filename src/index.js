
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

ReactDOM.render(<App store={store} />, document.getElementById('root'));
