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
      inputPW: "",
      inputName: this.props.userInfo.name,
      inputMobile: this.props.userInfo.mobile,
    };
  }

  // PW 수정 input으로 변환
  handleOpenEditPW = () => {
    this.setState({
      editPW: true,
    });
  };

  // PW 정보 수정 + PW test로 변환
  handleCloseEditPW = () => {
    axios
      .patch("http://localhost:5000/edituser", {
        id: this.props.userId,
        password: this.state.inputPW,
        name: this.state.inputName,
        mobile: this.state.inputMobile,
      })
      .then((result) => {
        this.setState({
          editPW: false,
          inputPW: result.data.password,
          inputName: result.data.name,
          inputMobile: result.data.mobile,
        });
        this.props.handleIsMyPage(result);
      })
      .catch((err) => {
        alert("정보가 수정되지 않았습니다.");
      });
  };

  // Name 수정 input 변환
  handleOpenEditName = () => {
    this.setState({
      editName: true,
    });
  };

  // Name 정보 수정 + Name test로 변환
  handleCloseEditName = () => {
    axios
      .patch("http://localhost:5000/edituser", {
        id: this.props.userId,
        password: this.props.userInfo.password,
        name: this.state.inputName,
        mobile: this.state.inputMobile,
      })
      .then((result) => {
        this.setState({
          editName: false,
          inputPW: result.data.password,
          inputName: result.data.name,
          inputMobile: result.data.mobile,
        });
        this.props.handleIsMyPage(result);
      })
      .catch((err) => {
        alert("정보가 수정되지 않았습니다.");
      });
  };

  // Mobile 수정 input 변환
  handleOpenEditMobile = () => {
    this.setState({
      editMobile: true,
    });
  };

  // Mobile 정보 수정 + Name test로 변환
  handleCloseEditMobile = () => {
    axios
      .patch("http://localhost:5000/edituser", {
        id: this.props.userId,
        password: this.props.userInfo.password,
        name: this.state.inputName,
        mobile: this.state.inputMobile,
      })
      .then((result) => {
        this.setState({
          editMobile: false,
          inputPW: result.data.password,
          inputName: result.data.name,
          inputMobile: result.data.mobile,
        });
        this.props.handleIsMyPage(result);
      })
      .catch((err) => {
        alert("정보가 수정되지 않았습니다.");
      });
  };

  // 뒤로 가기 기능
  handleGoBack = () => {
    this.props.handleStopIsMyPage();
    this.props.history.push("/main");
  };

  // PW 입력값을 setState
  handleSetStatePW = (e) => {
    this.setState({
      inputPW: e.target.value,
    });
  };

  // name 입력값을 setState
  handleSetStateName = (e) => {
    this.setState({
      inputName: e.target.value,
    });
  };

  // name 입력값을 setState
  handleSetStateMobile = (e) => {
    this.setState({
      inputMobile: e.target.value,
    });
  };

  // 회원 탈퇴 모달 오픈
  handleOpenDeleteUserModal = () => {
    alert("회원 탈퇴 모달 오픈");
  };

  // 모달 밖을 눌렀을 때 회원 탈퇴 모달 클로즈
  handleCloseDeleteUserModalWindow = () => {
    alert("회원 모달 닫기");
  };

  // 회원 탈퇴 모달 클로즈
  handleCloseDeleteUserModal = () => {
    alert("회원 모달 닫기");
  };

  // 회원 탈퇴
  handleDeleteUser = () => {
    alert("회원 탈퇴 버튼");
  };

  render() {
    let { userInfo, handleSignout } = this.props;
    let { editPW, editName, editMobile } = this.state;
    return (
      <div className="myPage">
        <div
          className="myPage_modal"
          onClick={this.handleCloseDeleteUserModalWindow}
        >
          <div className="myPage_modal_content">
            <div className="myPage_modal_header">
              <span>회원 탈퇴</span>
              <span
                className="myPage_modal_close"
                onClick={this.handleCloseDeleteUserModal}
              >
                &times;
              </span>
            </div>
            <div className="myPage_modal_body">정말 탈퇴하시겠습니까?</div>
            <div className="myPage_modal_btns">
              <button
                className="myPage_modal_yesBtn"
                onClick={this.handleDeleteUser}
              >
                네
              </button>
              <button
                className="myPage_modal_noBtn"
                onClick={this.handleCloseDeleteUserModal}
              >
                아니오
              </button>
            </div>
          </div>
        </div>
        <div className="myPage_title">MyTodo</div>
        <div className="myPage_info">
          <div className="myPage_email">Email</div>
          <div className="myPage_text">{userInfo.email}</div>
          <div className="myPage_password">
            Password
            {editPW ? (
              <button
                className="myPage_editBtn"
                onClick={this.handleCloseEditPW}
              >
                완료
              </button>
            ) : (
              <button
                className="myPage_editBtn"
                onClick={this.handleOpenEditPW}
              >
                수정
              </button>
            )}
          </div>
          {editPW ? (
            <input
              className="inputMyPage"
              type="password"
              placeholder="Password을 입력하세요."
              onChange={(e) => this.handleSetStatePW(e)}
              value={this.state.inputPW}
            />
          ) : (
            <div className="myPage_text">**********</div>
          )}
          <div className="myPage_name">
            Name
            {editName ? (
              <button
                className="myPage_editBtn"
                onClick={this.handleCloseEditName}
              >
                완료
              </button>
            ) : (
              <button
                className="myPage_editBtn"
                onClick={this.handleOpenEditName}
              >
                수정
              </button>
            )}
          </div>
          {editName ? (
            <input
              className="inputMyPage"
              type="text"
              placeholder="이름을 입력하세요."
              onChange={(e) => this.handleSetStateName(e)}
              value={this.state.inputName}
            />
          ) : (
            <div className="myPage_text">{userInfo.name}</div>
          )}
          <div className="myPage_mobile">
            Mobile
            {editMobile ? (
              <button
                className="myPage_editBtn"
                onClick={this.handleCloseEditMobile}
              >
                완료
              </button>
            ) : (
              <button
                className="myPage_editBtn"
                onClick={this.handleOpenEditMobile}
              >
                수정
              </button>
            )}
          </div>
          {editMobile ? (
            <input
              className="inputMyPage"
              type="text"
              placeholder="전화번호를 입력하세요."
              onChange={(e) => this.handleSetStateMobile(e)}
              value={this.state.inputMobile}
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
          <div className="myPage_deleteUser">
            <span
              className="myPage_deleteUserBtn"
              onClick={this.handleOpenDeleteUserModal}
            >
              회원 탈퇴
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MyPage);
