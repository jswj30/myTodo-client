import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./MyPage.scss";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPW: false,
      editName: false,
      editMobile: false,
    };
  }

  // PW 수정 input 변환
  handleEditPW = () => {
    this.setState({
      editPW: !this.state.editPW,
    });
  };

  // Name 수정 input 변환
  handleEditName = () => {
    this.setState({
      editName: !this.state.editName,
    });
  };

  // Mobile 수정 input 변환
  handleEditMobile = () => {
    this.setState({
      editMobile: !this.state.editMobile,
    });
  };

  // 뒤로 가기 기능
  handleGoBack = () => {
    this.props.handleStopIsMyPage();
    this.props.history.push("/main");
  };

  render() {
    let { userInfo, handleSignout } = this.props;
    let { editPW, editName, editMobile } = this.state;
    return (
      <div className="myPage">
        <div className="myPage_title">MyTodo</div>
        <div className="myPage_info">
          <div className="myPage_email">Email</div>
          <div className="myPage_text">{userInfo.email}</div>
          <div className="myPage_password">
            Password
            <button className="myPage_editBtn" onClick={this.handleEditPW}>
              수정
            </button>
          </div>
          {editPW ? (
            <input
              className="inputMyPage"
              type="password"
              placeholder="Password을 입력하세요."
            />
          ) : (
            <div className="myPage_text">{userInfo.password}</div>
          )}
          <div className="myPage_name">
            Name
            <button className="myPage_editBtn" onClick={this.handleEditName}>
              수정
            </button>
          </div>
          {editName ? (
            <input
              className="inputMyPage"
              type="text"
              placeholder="이름을 입력하세요."
            />
          ) : (
            <div className="myPage_text">{userInfo.name}</div>
          )}
          <div className="myPage_mobile">
            Mobile
            <button className="myPage_editBtn" onClick={this.handleEditMobile}>
              수정
            </button>
          </div>
          {editMobile ? (
            <input
              className="inputMyPage"
              type="text"
              placeholder="전화번호를 입력하세요."
            />
          ) : (
            <div className="myPage_text">{userInfo.mobile}</div>
          )}
        </div>
        <div className="myPage_btns">
          <button className="myPage_goBackBtn" onClick={this.handleGoBack}>
            뒤로가기
          </button>
          <button className="myPage_logoutBtn" onClick={handleSignout}>
            로그아웃
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(MyPage);
