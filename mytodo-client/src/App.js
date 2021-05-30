import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

// components
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Important from "./components/Important";
import MyPage from "./components/MyPage";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isImportant: false,
      isMyPage: false,
      userId: null,
      todoInfo: null,
      importantInfo: null,
      userInfo: null,
    };
  }

  componentDidMount() {
    this.handleIsLogin();
  }

  // 로그인 후 todo 정보 받아오기
  handleIsLogin = () => {
    // return
    axios
      .get("http://localhost:5000/gettodo")
      .then((res) => {
        // console.log(res);
        this.setState({
          isLogin: true,
          isImportant: false,
          isMyPage: false,
          todoInfo: res.data,
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({
          isLogin: false,
        });
        this.props.history.push("/");
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
    return axios
      .post("http://localhost:5000/signout/")
      .then((result) => {
        this.setState({
          isLogin: false,
          isImportant: false,
          isMyPage: false,
          userId: null,
          todoInfo: null,
          importantInfo: null,
          userInfo: {
            email: "",
            password: "",
            name: "",
            mobile: "",
          },
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        alert("로그아웃되지 않았습니다.");
      });
  };

  // 중요 일정 가져오기 + 중요 일정 페이지 열기
  handleIsImportant = () => {
    axios.get("http://localhost:5000/importanttodo").then((result) => {
      this.setState({
        importantInfo: result.data,
        isImportant: true,
        isMyPage: false,
      });
      this.props.history.push("/");
    });
  };

  // this.state.isImportant 끄기
  handleStopIsImportant = () => {
    this.setState({
      isImportant: false,
      importantInfo: null,
    });
  };

  // MyPage 열기
  handleIsMyPage = (e) => {
    this.setState({
      isImportant: false,
      isMyPage: true,
      userInfo: e.data,
    });
    this.props.history.push("/");
  };

  // this.state.isMyPage 끄기
  handleStopIsMyPage = () => {
    this.setState({
      isMyPage: false,
      userInfo: null,
    });
  };

  render() {
    const {
      isLogin,
      isImportant,
      isMyPage,
      userId,
      todoInfo,
      importantInfo,
      userInfo,
    } = this.state;

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
                handleIsMyPage={this.handleIsMyPage}
              />
            )}
          />
          <Route
            path="/important"
            render={() => (
              <Important
                handleStopIsImportant={this.handleStopIsImportant}
                handleSignout={this.handleSignout}
                importantInfo={importantInfo}
              />
            )}
          />
          <Route
            path="/mypage"
            render={() => (
              <MyPage
                userInfo={userInfo}
                userId={userId}
                handleStopIsMyPage={this.handleStopIsMyPage}
                handleSignout={this.handleSignout}
                handleIsMyPage={this.handleIsMyPage}
              />
            )}
          />
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                if (isImportant) {
                  return <Redirect to="/important" />;
                } else if (isMyPage) {
                  return <Redirect to="/mypage" />;
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
