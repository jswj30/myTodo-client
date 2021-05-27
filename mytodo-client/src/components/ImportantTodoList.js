import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ImportantTodoList.scss";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class ImportantTodoList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { content } = this.props.todo;
    return (
      <div className="important_todolist">
        <span className="important_todolist_content">{content}</span>
      </div>
    );
  }
}

export default withRouter(ImportantTodoList);
