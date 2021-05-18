import React from "react";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

const TodoList = ({ todo }) => {
  const { id, content, startDate } = todo;
  return (
    <div>
      {/* id content startDate */}
      id: {id} content: {content} startDate: {startDate}
    </div>
  );
};

export default TodoList;
