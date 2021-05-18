import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

// components
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  componentDidMount() {
    this.handleIsLogin();
  }

  handleIsLogin = () => {
    return axios
      .get("http://localhost:5000/gettodo")
      .then((res) => {
        console.log(res);
        this.setState({
          isLogin: true,
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({
            isLogin: false,
          });
          alert("사용자의 Session을 찾을 수 없습니다.");
          this.props.history.push("/");
        }
      });
  };

  render() {
    const { isLogin } = this.state;

    return (
      <div>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route
            path="/login"
            render={() => <Login handleIsLogin={this.handleIsLogin} />}
          />
          <Route path="/main" component={Main} />
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return <Redirect to="/main" />;
              }
              return <Redirect to="/login" />;
            }}
          />
          <Route
            // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
            render={({ location }) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
