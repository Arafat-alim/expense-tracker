import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    fireErrors: "",
  };
  render() {
    return (
      <>
        <form>
          <input
            type="email"
            className="regField"
            placeholder="Enter Email"
            name="email"
            autoComplete="off"
          />
          <input
            type="password"
            className="regField"
            placeholder="Enter Password"
            name="password"
            autoComplete="off"
          />
          <input type="submit" value="Login" className="submitBtn" />
        </form>
      </>
    );
  }
}

export default Login;
