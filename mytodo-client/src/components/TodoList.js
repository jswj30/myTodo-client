import React from "react";
import { withRouter } from "react-router-dom";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

const TodoList = ({ todo }) => {
  const { id, content, startDate } = todo;
  return (
    <div>
      id: {id} content: {content} startDate: {startDate}
    </div>
  );
};

export default withRouter(TodoList);
