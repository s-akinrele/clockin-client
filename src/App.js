import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Aux from './hoc/Aux';
// import Auth from './containers/Auth/Auth';
import AuthController from './containers/Auth/AuthController';

function App() {
  return (
    <Aux>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={AuthController} />
        </Switch>
      </BrowserRouter>
    </Aux>
  );
}

export default App;
