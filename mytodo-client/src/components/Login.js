import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  // email, password 입력 후 state에 저장
  handleInputValue = (e) => (text) => {
    this.setState({
      [e]: text.target.value,
    });
  };

  // 일반 로그인 기능
  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      // Email과 Password 중 하나라도 비어있다면 alert
      if (!email || !password) {
        alert("Email과 Password를 모두 입력하세요.");
      } else {
        const resp = await axios({
          method: "post",
          url: "https://api.js-mytodo.com:5000/signin",
          data: {
            email: email,
            password: password,
          },
        });

        if (!resp) {
          alert("Email 또는 Password가 일치하지 않습니다.");
        } else {
          // console.log(resp.data);
          this.props.handleUserId(resp.data.id);
          this.props.handleIsLogin();
        }
      }
    } catch (err) {
      alert("Email 또는 Password가 일치하지 않습니다.");
    }
  };

  // 체험판 로그인 기능
  handleTestLogin = async () => {
    try {
      const resp = await axios({
        method: "post",
        url: "https://api.js-mytodo.com:5000/signin",
        data: {
          email: "test@test.com",
          password: "test",
        },
      });
      if (!resp) {
        alert("Email 및 Password가 일치하지 않습니다.");
      } else {
        // console.log(resp.data);
        this.props.handleUserId(resp.data.id);
        this.props.handleIsLogin();
      }
    } catch (err) {
      alert(err);
    }
  };

  // Enter누르면 로그인하기
  onKeyLogin = (e) => {
    if (e.key === "Enter") {
      this.handleLogin();
    }
  };

  render() {
    return (
      <div className="login">
        <div className="signin_title">MyTodo</div>
        <div className="login_info">
          <div className="login_email">
            <div>Email</div>
            <input
              type="text"
              placeholder="Email을 입력하세요."
              onChange={this.handleInputValue("email")}
              className="inputEmail"
            />
          </div>
          <div className="login_password">
            <div>Password</div>
            <input
              type="password"
              placeholder="Password를 입력하세요."
              onChange={this.handleInputValue("password")}
              className="inputPassword"
              onKeyPress={this.onKeyLogin}
            />
          </div>
        </div>
        <button className="loginButton" onClick={() => this.handleLogin()}>
          로그인
        </button>
        <button className="testButton" onClick={() => this.handleTestLogin()}>
          체험판 로그인
        </button>
        <Link to="/signup" className="signup_click">
          계정이 없으신가요?
        </Link>
      </div>
    );
  }
}

export default Login;
