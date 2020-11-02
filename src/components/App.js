import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.update(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    return (
      <div className="App">
        <div className="Clock">
          <h3 id="time">{this.state.time}</h3>
        </div>
      </div>
    );
  }
}

export default App;
