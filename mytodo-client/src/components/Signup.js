import axios from "axios";
import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      mobile: "",
    };
  }

  // 정보 입력
  handleInputInfo = (e) => (text) => {
    this.setState({
      [e]: text.target.value,
    });
  };

  // 회원가입 버튼
  handleSignup = async () => {
    const { email, password, name, mobile } = this.state;
    if (!email || !password || !name || !mobile) {
      alert("모든 정보를 입력해주세요.");
      return;
    }
    try {
      const resp = await axios({
        method: "post",
        url: "http://localhost:5000/signup",
        data: {
          email,
          password,
          name,
          mobile,
        },
      });
      if (resp) {
        alert("회원가입이 완료되었습니다.");
        this.props.history.push("/");
      } else {
        alert("회원가입이 완료되지 않았습니다. 다시 시도해 주세요.");
      }
    } catch (err) {
      alert("이미 존재하는 유저입니다.");
    }
  };

  // 뒤로 버튼
  handleGoBack = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="signup">
        <div className="signup_title">MyTodo</div>
        <div className="signup_info">
          <div className="signup_email">Email</div>
          <input
            className="inputSignup"
            type="text"
            placeholder="Email을 입력하세요."
            onChange={this.handleInputInfo("email")}
          />
          <div className="signup_password">Password</div>
          <input
            className="inputSignup"
            type="password"
            placeholder="Password를 입력하세요."
            onChange={this.handleInputInfo("password")}
          />
          <div className="signup_name">Name</div>
          <input
            className="inputSignup"
            type="text"
            placeholder="이름을 입력하세요."
            onChange={this.handleInputInfo("name")}
          />
          <div className="signup_mobile">Mobile</div>
          <input
            className="inputSignup"
            type="text"
            placeholder="전화번호를 입력하세요."
            onChange={this.handleInputInfo("mobile")}
          />
        </div>
        <div className="signup_btns">
          <button className="signupButton" onClick={this.handleSignup}>
            회원가입
          </button>
          <button className="goBackButton" onClick={this.handleGoBack}>
            뒤로
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
