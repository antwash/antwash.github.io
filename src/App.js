import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import "./css/App.css";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer'
import NavigationBar from './components/navigation/NavigationBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
