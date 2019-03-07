import React, { Component } from 'react'; 
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return(
        <Navbar className="nav-bar">
          <Navbar.Brand href="/">
            <div className="brand-initial"> A </div>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink className="navItem" to="/">home</NavLink>
              <NavLink className="navItem" to="/about">about</NavLink>
              <NavLink className="navItem" to="/contact">contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default NavigationBar;