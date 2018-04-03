import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

export default class App extends Component {
  render() {
    const timer = {
      textAlign: 'center'
    };
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <Clock />
        </div>
        <div className="pure-u-1-3">
          <div className="btn l-box">
            <h3>Countup Timer</h3>
          </div>
        </div>
        <div className="pure-u-1-3">
          <div className="btn l-box">
            <h3>Countdown Timer</h3>
          </div>
        </div>
        <div className="pure-u-1-3">
          <div className="btn l-box">
            <h3>Pomodoro Clock</h3>
          </div>
        </div>
      </div>
    );
  }
}
