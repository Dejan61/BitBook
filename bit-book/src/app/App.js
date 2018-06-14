import React, { Component } from 'react';
import './App.css';
import Home from '../app/home/HomePage';
import Feed from '../app/feed/FeedPage';
import People from '../app/people/PeoplePage';
import Profile from '../app/profile/ProfilePage';
import SingleFeedItem from '../app/singleFeedItem/SingleFeedItemPage';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/people" component={People} />
          <Route path="/people/:id" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/feed/:type/:id" component={SingleFeedItem} />
          <Redirect from="/" to="/home" />
        </Switch >
      </div>
    );
  }
}

export default App;
