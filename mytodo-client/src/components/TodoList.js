import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./TodoList.scss";
import { MdDeleteForever } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // 중요 체크하기
  handleImportant = () => {
    const { id } = this.props.todo;
    axios
      .patch("http://localhost:5000/important", {
        id,
      })
      .then((result) => {
        // alert("중요 표시가 변경되었습니다.");
        this.props.handleIsLogin();
      })
      .catch((err) => {
        alert(err);
      });
  };

  // todo 삭제하기
  handleRemoveTodo = () => {
    const { id } = this.props.todo;
    axios
      .post("http://localhost:5000/removetodo/", {
        id,
      })
      .then((result) => {
        alert("Todo가 삭제되었습니다.");
        this.props.handleIsLogin();
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    const { content, important } = this.props.todo;
    return (
      <div className="todolist">
        <span className="todolist_checkbox" onClick={this.handleImportant}>
          {important ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </span>
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
