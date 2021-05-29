import React, { Component } from "react";
import "../components/Password.scss";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class Password extends Component {
  render() {
    return (
      <div className="password_content">
        <div className="password_header">비밀번호를 확인합니다.</div>
        <input
          className="password_input"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
    );
  }
}

export default Password;
