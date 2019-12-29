import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';

class Body extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => { return <Home />; }} />
      </Switch>
    );
  }
}

export default Body;