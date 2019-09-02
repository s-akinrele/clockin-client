import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Aux from './hoc/Aux';
// import Auth from './containers/Auth/Auth';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <Aux>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </Aux>
  );
}

export default App;
