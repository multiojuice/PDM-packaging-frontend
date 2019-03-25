import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Home,
  Client,
  Clerk,
  Transport
} from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/client" component={Client} />
          <Route path="/clerk" component={Clerk} />
          <Route path="/transport" component={Transport} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
