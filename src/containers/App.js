import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Main from '../routes/Main';
import DigitalClock from '../components/DigitalClock';
import { Countdown, Countup, Pomodoro } from '../components/Clocks';

class App extends Component {
  componentWillMount() {
    document.title = 'TickTock';
  }
  render() {
    // <Route path="/countdown" component={Countdown} />
    // <Route path="/countup" component={Countup} />
    // <Route path="/pomodoro" component={Pomodoro} />
    return (
      <div>
        <Navbar />
        <DigitalClock />
        <Route path="/" component={Main} />
      </div>
    );
  }
}

export default App;