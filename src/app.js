import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, dd! </h1>
        <h1>{process.env.API_URL}</h1>
      </div>
    );
  }
}

export default hot(module)(App);
