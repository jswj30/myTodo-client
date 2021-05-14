import React, { Component } from "react";
import { Route } from "react-router-dom";

// components
import Login from "./Login";
import Main from "./Main";

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
        {/* <Route path="/main" component={Main} /> */}
      </div>
    );
  }
}

export default App;
