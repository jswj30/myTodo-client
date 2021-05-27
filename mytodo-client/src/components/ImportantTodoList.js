import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ImportantTodoList.scss";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class ImportantTodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, content, startDate } = this.props.todo;
    return (
      <div className="important_todolist">
        id: {id} content: {content} startDate: {startDate}
      </div>
    );
  }
}

export default withRouter(ImportantTodoList);
