import React, { Component } from "react";
// axios
const axios = require("axios");

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
      const resp = await axios({
        method: "post",
        url: "http://localhost:5000/signin",
        data: {
          email: email,
          password: password,
        },
      });
      if (!resp) {
        alert("Email 및 Password가 일치하지 않습니다.");
      } else {
        this.props.handleIsLogin();
      }
    } catch (err) {
      // console.error(err);
      alert("Email 및 Password가 일치하지 않습니다.");
    }
  };

  // 체험판 로그인 기능
  handleTestLogin = async () => {
    try {
      const resp = await axios({
        method: "post",
        url: "http://localhost:5000/signin",
        data: {
          email: "test@test.com",
          password: "test",
        },
      });
      if (!resp) {
        alert("Email 및 Password가 일치하지 않습니다.");
      } else {
        this.props.handleIsLogin();
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="login">
        <div className="title">
          <h1>MyTodo</h1>
        </div>
        <div className="login_info">
          <h3>Email</h3>
          <input
            type="text"
            placeholder="Email을 입력하세요."
            onChange={this.handleInputValue("email")}
          />
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password를 입력하세요."
            onChange={this.handleInputValue("password")}
          />
        </div>
        <div className="login_submit">
          <button className="loginButton" onClick={() => this.handleLogin()}>
            로그인
          </button>
          <button className="testButton" onClick={() => this.handleTestLogin()}>
            체험판 로그인
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
