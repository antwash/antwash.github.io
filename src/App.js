import React, { Component } from "react";
import NavigationBar from './components/navigation/NavigationBar'
import Footer from './components/footer/Footer'
import "./css/App.css";

import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route excat path="/about" component={About} />
            <Route excat path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
