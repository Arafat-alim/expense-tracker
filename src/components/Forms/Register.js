import React, { Component } from "react";

class Register extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
    fireErrors: "",
  };
  render() {
    return (
      <>
        <form>
          <input
            type="text"
            className="regField"
            placeholder="Enter Name"
            name="name"
            autoComplete="off"
          />
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
          <input type="submit" value="Register" className="submitBtn" />
        </form>
      </>
    );
  }
}

export default Register;
