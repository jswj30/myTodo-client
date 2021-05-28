import React, { Component } from "react";
import "./MyPage.scss";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class MyPage extends Component {
  render() {
    return (
      <div className="myPage">
        <div className="myPage_title">MyTodo</div>
        <div className="myPage_info">
          <div className="myPage_email">
            Email
            <button className="myPage_editBtn">수정</button>
          </div>
          <input
            className="inputmyPage"
            type="text"
            placeholder="Email을 입력하세요."
          />
          <div className="myPage_password">
            Password
            <button className="myPage_editBtn">수정</button>
          </div>
          <input
            className="inputmyPage"
            type="password"
            placeholder="Password을 입력하세요."
          />
          <div className="myPage_name">
            Name
            <button className="myPage_editBtn">수정</button>
          </div>
          <input
            className="inputmyPage"
            type="text"
            placeholder="이름을 입력하세요."
          />
          <div className="myPage_mobile">
            Mobile
            <button className="myPage_editBtn">수정</button>
          </div>
          <input
            className="inputmyPage"
            type="text"
            placeholder="전화번호를 입력하세요."
          />
        </div>
        <div className="myPage_btns">
          <button className="myPage_goBackBtn">뒤로가기</button>
          <button className="myPage_logoutBtn">로그아웃</button>
        </div>
      </div>
    );
  }
}

export default MyPage;
