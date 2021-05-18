import React, { Component } from "react";
import TodoList from "./TodoList";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.todoInfo;
    return (
      <div>
        <h1>메인페이지</h1>
        {info && info.map((todo, i) => <TodoList todo={todo} key={i} />)}
      </div>
    );
  }
}

export default Main;
