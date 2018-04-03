import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Clock from './Clock';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <Clock />
          </div>
        </div>
        <BrowserRouter>
          <div className="pure-g">
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
        </BrowserRouter>
      </div>
    );
  }
}
