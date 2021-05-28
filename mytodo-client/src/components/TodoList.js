import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./TodoList.scss";
import { MdDeleteForever } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

// axios
const axios = require("axios");
axios.defaults.withCredentials = true;

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
    };
  }

  // 중요 체크하기
  handleImportant = () => {
    this.setState({
      important: !this.state.important,
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
    const { important } = this.state;
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
