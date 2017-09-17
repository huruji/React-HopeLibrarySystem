import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routers from './router/index'
import './App.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Redux/index'

const store = createStore(rootReducer, applyMiddleware(thunk));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routers/>
        </Router>
      </Provider>
    );
  }
}

export default App;
