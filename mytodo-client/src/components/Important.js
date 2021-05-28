import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImportantTodoList from "./ImportantTodoList";
import "./Important.scss";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class Important extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     importantTodo: null,
  //   };
  // }

  // 뒤로 가기 기능
  handleGoBack = () => {
    this.props.handleStopIsImportant();
    this.props.history.goBack();
  };

  render() {
    // let { importantTodo } = this.state;
    let { handleSignout, importantInfo } = this.props;
    return (
      <div className="important">
        <div className="important_title">MyTodo</div>
        <div className="important_todolist">
          {importantInfo &&
            importantInfo.map((todo, i) => (
              <ImportantTodoList className="imp_todolist" todo={todo} key={i} />
            ))}
        </div>
        <div className="important_logout">
          <button
            className="important_goBackBtn"
            onClick={() => this.handleGoBack()}
          >
            뒤로가기
          </button>
          <button
            className="important_logoutBtn"
            onClick={() => handleSignout()}
          >
            로그아웃
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Important);
