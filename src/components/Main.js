import React, { Component } from "react";
import Login from "./Forms/Login";
import "./main.css";
class Main extends Component {
  state = {
    user: 1,
    loading: true,
  };
  render() {
    return (
      <>
        <div className="mainBlock">
          <Login />
        </div>
      </>
    );
  }
}

export default Main;
