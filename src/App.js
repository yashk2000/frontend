import React, { Component } from 'react';
import { Route } from 'react-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
      </div>
    );
  }
}

export default App;