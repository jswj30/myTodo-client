import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      id: "",
      email: "",
      name: "",
      mobile: "",
    };
  }

  handleLogin = async () => {
    try {
      const resp = await axios({
        method: "post",
        url: "http://localhost:5000/signin",
        data: {
          email: "test@test.com",
          password: "test",
        },
      });
      this.setState({
        isLogin: !this.state.isLogin,
        id: resp.id,
        email: resp.email,
        name: resp.name,
        mobile: resp.mobile,
      });
      this.props.history.push("/main");
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    return (
      <div>
        <Route
          path="/"
          component={Login}
          exact
          handleLogin={this.handleLogin}
        />
        <Route path="/main" component={Main} />
      </div>
    );
  }
}

export default App;
