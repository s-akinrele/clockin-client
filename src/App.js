import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import Aux from './hoc/Aux';
import rootReducer from './reducers';
import AuthController from './containers/Auth/AuthController';

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()))
function App() {
  return (
    <Provider store={store}>
      <Aux>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={AuthController} />
          </Switch>
        </BrowserRouter>
      </Aux>
    </Provider>
  );
}

export default App;
