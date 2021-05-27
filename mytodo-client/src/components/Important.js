import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImportantTodoList from "./ImportantTodoList";
import "./Important.scss";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class Important extends Component {
  constructor(props) {
    super(props);
    this.state = {
      importantTodo: [
        {
          id: 3,
          content: "장보기",
          startDate: "2021-2-24 19:11:57",
        },
        {
          id: 5,
          content: "여행 일정 짜기",
          startDate: "2021-2-24 19:12:23",
        },
      ],
    };
  }

  render() {
    let { importantTodo } = this.state;
    let { handleSignout } = this.props;
    return (
      <div className="important">
        <div className="important_title">MyTodo</div>
        <div className="important_todolist">
          {importantTodo &&
            importantTodo.map((todo, i) => (
              <ImportantTodoList className="imp_todolist" todo={todo} key={i} />
            ))}
        </div>
        <div className="important_logout">
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
