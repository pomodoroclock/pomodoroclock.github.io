import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import DigitalClock from './DigitalClock';
import { Countdown, Countup, Pomodoro } from './Clocks';
import './App.css';

const main = () => {
  return (
    <div className="pure-g">
      <div className="pure-u-1-3">
        <Link to="/countdown">
          <div className="btn l-box">
            <h3>Countdown Timer</h3>
          </div>
        </Link>
      </div>
      <div className="pure-u-1-3">
        <Link to="/countup">
          <div className="btn l-box">
            <h3>Countup Timer</h3>
          </div>
        </Link>
      </div>
      <div className="pure-u-1-3">
        <Link to="/pomodoro">
          <div className="btn l-box">
            <h3>Pomodoro Clock</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <DigitalClock />
          </div>
        </div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={main} />
            <Route path="/countdown" component={Countdown} />
            <Route path="/countup" component={Countup} />
            <Route path="/pomodoro" component={Pomodoro} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
