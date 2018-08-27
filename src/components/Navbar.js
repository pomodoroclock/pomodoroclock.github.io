import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

function AppBar(props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        
        <NavItem eventKey={1} href="#">
          <NavLink to="/countdown">Countdown Timer</NavLink>
        </NavItem>
        <NavItem eventKey={2} href="#">
          /countup
        </NavItem>
        <NavItem eventKey={3} href="#">
          /pomodoro
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default AppBar;