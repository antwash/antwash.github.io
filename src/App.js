import React, { Component } from "react";
import NavigationBar from './components/navigation/NavigationBar'
import Footer from './components/footer/Footer'
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Footer />
      </div>
    );
  }
}

export default App;
