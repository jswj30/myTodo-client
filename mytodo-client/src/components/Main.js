import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TodoList from "./TodoList";

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
    alert(this.state.inputTodo);
  };

  render() {
    let { todoInfo, handleSignout } = this.props;
    return (
      <div>
        <h1>TodoList</h1>
        <div className="inputTodo">
          <input
            type="text"
            placeholder="Todo를 입력해주세요."
            onChange={(e) => this.handleSetStateTodo(e)}
            value={this.state.inputTodo}
          />
          <button className="submitTodo" onClick={() => this.handleIputTodo()}>
            등록
          </button>
        </div>
        <div className="todolist">
          {todoInfo &&
            todoInfo.map((todo, i) => <TodoList todo={todo} key={i} />)}
          <button onClick={() => handleSignout()}>로그아웃</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
