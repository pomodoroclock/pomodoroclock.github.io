import React, { Component } from 'react';

export default class DigitalClock extends Component {
	state = {
    time: "00:00:00",
    amPm: "am",
    showClock: false
  }

	componentDidMount () {
		this.loadInterval = setInterval(this.getTime, 900);
	}

	getTime = () => {
    let takeTwelve = n => (n > 12) ? n - 12 : n;
    let addZero = n => (n < 10) ? "0" + n : n;
		 
    let d, h, m, s, t, amPm;
    d = new Date();
    h = addZero(takeTwelve(d.getHours()));
    m = addZero(d.getMinutes());
    s = addZero(d.getSeconds());
    t = `${h}:${m}:${s}`;
    
    amPm = d.getHours() >= 12 ? "pm" : "am";
  
    this.setState({
      time: t,
      amPm: amPm
    });

	}

  render = () => {
    return (
      <div id="central-clock">
        <span>{this.state.time}</span>
        <span>{this.state.amPm}</span>
      </div>
    );
	}
}