import React, { Component } from "react";
import Login from "./Forms/Login";
import Register from "./Forms/Register";

import "./main.css";
class Main extends Component {
  state = {
    user: 1,
    loading: true,
    formSwitcher: false,
  };
  formSwitcher = (action) => {
    console.log(action);
    this.setState({
      formSwitcher: action === "register" ? true : false,
    });
  };
  render() {
    const form = !this.state.formSwitcher ? <Login /> : <Register />;
    return (
      <>
        <div className="mainBlock">
          {form}
          {!this.state.formSwitcher ? (
            <span className="underLine">
              Not Registered?
              <button
                onClick={() =>
                  this.formSwitcher(
                    !this.state.formSwitcher ? "register" : "login"
                  )
                }
                className="linkBtn"
              >
                Create an account!
              </button>
            </span>
          ) : (
            <span className="underLine">
              Have an account?
              <button
                onClick={() =>
                  this.formSwitcher(
                    !this.state.formSwitcher ? "register" : "login"
                  )
                }
                className="linkBtn"
              >
                Sign In Here!
              </button>
            </span>
          )}
        </div>
      </>
    );
  }
}

export default Main;
