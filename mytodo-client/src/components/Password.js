import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../components/Password.scss";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPW: "",
    };
  }

  // 입력한 비밀번호를 저장
  handleInputPassword = (e) => {
    this.setState({
      inputPW: e.target.value,
    });
  };

  // 유저 정보 가져오기 + MyPage 열기
  handleOpenMyPage = () => {
    axios
      .post("http://localhost:5000/search/mypage", {
        id: this.props.userId,
        password: this.state.inputPW,
      })
      .then((res) => {
        this.props.handleIsMyPage(res);
      })
      .catch((err) => {
        alert("비밀번호가 일치하지 않습니다.");
      });
  };

  // Enter 누르면 확인 버튼 클릭 활성화
  handleEnterPassword = (e) => {
    if (e.key === "Enter") {
      this.handleOpenMyPage();
    }
  };

  render() {
    return (
      <div className="password_content">
        <div className="password_header">
          <span>비밀번호를 확인합니다.</span>
          <span
            className="password_close"
            onClick={this.props.handleClosePassword}
          >
            &times;
          </span>
        </div>
        <div className="password_body">
          <input
            className="password_input"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => this.handleInputPassword(e)}
            value={this.state.inputPW}
            onKeyPress={this.handleEnterPassword}
          />
          <button className="password_btn" onClick={this.handleOpenMyPage}>
            확인
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Password);
