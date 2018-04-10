import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import DigitalClock from './DigitalClock';
import { Countdown, Countup, Pomodoro } from './Clocks';
import './styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <DigitalClock />
          </div>
        </div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Main} />
            <Route path="/countdown" component={Countdown} />
            <Route path="/countup" component={Countup} />
            <Route path="/pomodoro" component={Pomodoro} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const Main = () => {
  return (
    <div className="pure-g">
      <div className="pure-u-1-3">
        <NavLink to="/countdown" className="btn l-box" activeClassName="active">Countdown Timer</NavLink>
      </div>
      <div className="pure-u-1-3">
        <NavLink to="/countup" className="btn l-box" activeClassName="active">Countup Timer</NavLink>
      </div>
      <div className="pure-u-1-3">
        <NavLink to="/pomodoro" className="btn l-box" activeClassName="active">Pomodoro Clock</NavLink>
      </div>
    </div>
  );
};