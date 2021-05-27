import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

// components
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Important from "./components/Important";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isImportant: false,
      userInfo: null,
      todoInfo: null,
    };
  }

  componentDidMount() {
    this.handleIsLogin();
  }

  // 로그인 후 todo 정보 받아오기
  handleIsLogin = () => {
    return axios
      .get("http://localhost:5000/gettodo")
      .then((res) => {
        // console.log(res);
        this.setState({
          isLogin: true,
          todoInfo: res.data,
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({
            isLogin: false,
          });
          this.props.history.push("/");
        }
      });
  };

  // state.userId 변경
  handleUserId = (e) => {
    this.setState({
      userId: e,
    });
  };

  // 로그아웃 기능
  handleSignout = () => {
    return axios.post("http://localhost:5000/signout/").then((result) => {
      this.setState({
        isLogin: false,
        isImportant: false,
        userInfo: null,
        todoInfo: null,
      });
      // alert(result.data);
      this.props.history.push("/");
    });
  };

  // 중요 일정 페이지 열기
  handleIsImportant = () => {
    this.setState({
      isImportant: true,
    });
    this.props.history.push("/");
  };

  render() {
    const { isLogin, isImportant, userId, todoInfo } = this.state;

    return (
      <div>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route
            path="/login"
            render={() => (
              <Login
                handleUserId={this.handleUserId}
                handleIsLogin={this.handleIsLogin}
              />
            )}
          />
          <Route
            path="/main"
            render={() => (
              <Main
                todoInfo={todoInfo}
                userId={userId}
                handleIsLogin={this.handleIsLogin}
                handleSignout={this.handleSignout}
                handleIsImportant={this.handleIsImportant}
              />
            )}
          />
          <Route
            path="/important"
            render={() => <Important handleSignout={this.handleSignout} />}
          />
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                if (isImportant) {
                  return <Redirect to="/important" />;
                } else {
                  return <Redirect to="/main" />;
                }
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
