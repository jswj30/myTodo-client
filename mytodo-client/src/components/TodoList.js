import React from "react";
import { withRouter } from "react-router-dom";
import "./TodoList.scss";
import { MdDeleteForever } from "react-icons/md";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

const TodoList = ({ todo }) => {
  // const { id, content, startDate } = todo;
  const { content } = todo;
  return (
    <div className="todolist">
      {content}
      <MdDeleteForever className="deleteIcon" />
    </div>
  );
};

export default withRouter(TodoList);
