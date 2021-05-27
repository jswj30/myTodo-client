import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./TodoList.scss";
import { MdDeleteForever } from "react-icons/md";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // todo 삭제하기
  handleRemoveTodo = () => {
    const { id } = this.props.todo;
    axios
      .post("http://localhost:5000/removetodo/", {
        id,
      })
      .then((result) => {
        console.log("result: ", result);
        alert("Todo가 삭제되었습니다.");
        this.props.handleIsLogin();
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    const { content } = this.props.todo;
    return (
      <div className="todolist">
        <span className="todolist_content">{content}</span>
        <MdDeleteForever
          className="deleteIcon"
          onClick={this.handleRemoveTodo}
        />
      </div>
    );
  }
}

export default withRouter(TodoList);
