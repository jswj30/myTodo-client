import React, { Component } from "react";
import { Route } from "react-router-dom";

// components
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";

// axios
// const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  handleIsLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };

  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <Route
          path="/"
          exact
          render={() =>
            isLogin ? <Main /> : <Login handleIsLogin={this.handleIsLogin} />
          }
        />
        <Route path="/signup" component={Signup} />
      </div>
    );
  }
}

export default App;
