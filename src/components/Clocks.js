import React, { Component } from 'react';

import '../styles/Clocks.css';

export class Countdown extends Component {
  constructor(props) {
    super(props);
    this.minutes = React.createRef();
    this.seconds = React.createRef();
    this.state = {
      hours: '',
      minutes: '',
      seconds: ''
    };
  }
  handleInput = (e) => {
    let {value} = e.target;
    console.log(value);
    
    if(isNaN(value)) {
      return;
    }
    let {placeholder} = e.target;
    switch(placeholder) {
      case 'h':
        this.setState({
          hours: value
        });
        if(value.length === 2) {
          this.minutes.current.focus();
          this.minutes.current.select();
        }
        break;
      case 'm':
        this.setState({
          minutes: value
        });
        if(value.length === 2) {
          this.seconds.current.focus();
          this.seconds.current.select();
        }
        break;
      case 's':
        this.setState({
          seconds: value
        });
        break;
      default:
        break;
    }
  }

  handleEnter = () => {
    let { hours, minutes, seconds } = this.state;
    if(hours || minutes || seconds) {
      this.startTimer();
    }
  }

  startTimer = () => {
    let { hours, minutes, seconds } = this.state;
    console.log(`Starting timer at: ${hours}:${minutes}:${seconds}`)
  }

	render = () => {
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <div className="countdown clock">
            <h4>Start from:</h4>
            <form className="pure-form countdown-form">
              <input type="text"
                onChange={this.handleInput}
                value={this.state.hours}
                placeholder="h" maxLength="2" size="2" />
              <input type="text"
                onChange={this.handleInput}
                value={this.state.minutes}
                ref={this.minutes}
                placeholder="m" maxLength="2" size="2" />
              <input type="text"
                onChange={this.handleInput}
                value={this.state.seconds}
                ref={this.seconds}
                placeholder="s" maxLength="2" size="2" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export class Countup extends Component {
	render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <div className="countup clock">
            <h4>0:00</h4>
            <a className="button-secondary pure-button">Start counting up</a>
          </div>
        </div>
      </div>
    );
  }
}

export class Pomodoro extends Component {
	render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <div className="pomodoro clock">
            <h4>pomodoro</h4>
          </div>
        </div>
      </div>
    );
  }
}