import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
  };

  handleChange = (e) => {
    console.log(e.target.type);
    console.log(e.target.name);

    const username = e.target.value;

    this.setState({
      username,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">
            Twoję imię:
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
            Twoję adres email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
