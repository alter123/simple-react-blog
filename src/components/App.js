import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import _404 from './404';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route path='/posts/:url' component={Post} />
          <Route component={_404} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
