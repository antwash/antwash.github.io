import React, { Component } from 'react'; 
import { Nav, Navbar } from 'react-bootstrap';
import NavigationBarItem from './NavigationItem';

class NavigationBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      navItems: [
        {title: 'home', selected: false},
        {title: 'about', selected: false},
        {title: 'contact', selected: false}
      ],
    }
  }

  render() {
    var list_items = [];
    const navItems = (this.state.navItems) ? this.state.navItems : [];
  
    for (var index = 0; index < navItems.length; index++) {

      const pathName = window.location.pathname.slice(1);
      const navBarItemTitle = navItems[index].title;
      const navBarItemSelected = (navBarItemTitle === pathName ? true:false);
      
      list_items.push(
        <NavigationBarItem 
          key={index}
          title={navBarItemTitle}
          selected={navBarItemSelected}
          />
      )
    }

    return(
        <Navbar className="nav-bar">
          <Navbar.Brand href="#home">
            <div className="brand-initial" > A </div>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {list_items}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default NavigationBar;