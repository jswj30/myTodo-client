import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TodoList from "./TodoList";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { todoInfo, handleSignout } = this.props;
    return (
      <div>
        <h1>메인페이지</h1>
        {todoInfo &&
          todoInfo.map((todo, i) => <TodoList todo={todo} key={i} />)}
        <button onClick={() => handleSignout()}>로그아웃</button>
      </div>
    );
  }
}

export default withRouter(Main);
