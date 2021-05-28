import React, { Component } from "react";
import { Route } from "react-router-dom";
import TodoList from "./TodoList";
import "./Main.scss";
import { GiHamburgerMenu } from "react-icons/gi";

// components
import Important from "./Important";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTodo: "",
    };
  }

  // todo 입력값을 setState
  handleSetStateTodo = (e) => {
    this.setState({
      inputTodo: e.target.value,
    });
  };

  // todo 등록하기
  handleIputTodo = () => {
    if (this.state.inputTodo === "") {
      alert("Todo가 공백입니다.");
      return;
    }
    if (this.props.userId) {
      return axios
        .post("http://localhost:5000/posttodo", {
          content: this.state.inputTodo,
          userId: this.props.userId,
        })
        .then((res) => {
          alert("Todo가 등록되었습니다.");
          this.setState({
            inputTodo: "",
          });
          this.props.handleIsLogin();
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Todo가 등록되지 않았습니다. 다시 로그인 후 Todo를 등록해 주세요.");
    }
  };

  // Enter 누르면 todo 생성하기
  onKeyTodo = (e) => {
    if (e.key === "Enter") {
      this.handleIputTodo();
    }
  };

  // 모달 창 실행
  handleOpenModal = () => {
    let modal = document.querySelector(".modal");
    modal.style.display = "block";
  };

  // 모달 창 닫기
  handleCloseModal = () => {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
  };

  // 화면 다른 곳 눌렀을 때 모달 창 닫기
  handleCloseModalWindow = (event) => {
    let modal = document.querySelector(".modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  render() {
    let { todoInfo, handleSignout } = this.props;
    return (
      <div>
        <div className="modalIcon">
          <span className="modalIcon_icon">
            <GiHamburgerMenu onClick={this.handleOpenModal} />
          </span>
        </div>
        <div className="modal" onClick={this.handleCloseModalWindow}>
          <div className="modal_content">
            <div className="modal_header">
              <span>Menu</span>
              <span className="modal_close" onClick={this.handleCloseModal}>
                &times;
              </span>
            </div>
            <div className="modal_body">
              <span onClick={this.props.handleIsMyPage}>회원 정보</span>
              <span
                className="modal_body_important"
                onClick={this.props.handleIsImportant}
              >
                중요 일정
              </span>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="main_title">MyTodo</div>
          <div className="main_input">
            <input
              type="text"
              placeholder="Todo를 입력해주세요."
              onChange={(e) => this.handleSetStateTodo(e)}
              value={this.state.inputTodo}
              onKeyPress={this.onKeyTodo}
              className="main_inputTodo"
            />
            <button
              className="main_inputBtn"
              onClick={() => this.handleIputTodo()}
            >
              등록
            </button>
          </div>
          <div className="main_todolist">
            {todoInfo &&
              todoInfo.map((todo, i) => (
                <TodoList
                  className="todolist"
                  todo={todo}
                  key={i}
                  handleIsLogin={this.props.handleIsLogin}
                />
              ))}
          </div>
          <div className="main_logout">
            <button className="main_logoutBtn" onClick={() => handleSignout()}>
              로그아웃
            </button>
          </div>
        </div>
        <Route path="/main/important" render={() => <Important />} />
      </div>
    );
  }
}

export default Main;
