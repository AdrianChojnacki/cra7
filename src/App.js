import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,

    errors: {
      username: true,
      email: false,
      password: false,
      accept: false,
    },
  };

  messages = {
    username_incorrect: "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Brak @ w emailu",
    password_incorrect: "Hasło musi mieć 8 znaków",
    accept_incorrect: "Nie potwierdzona zgoda",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;

      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;

      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="username">
            Twoje imię:
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
          </label>
          <label htmlFor="email">
            Twoję email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Twoje hasło:
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />
            Wyrażam zgodę
          </label>
          <button>Zapisz się</button>
        </form>
      </div>
    );
  }
}

export default App;
