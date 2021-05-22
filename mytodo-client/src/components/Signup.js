import axios from "axios";
import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      mobile: "",
    };
  }

  // 정보 입력
  handleInputInfo = (e) => (text) => {
    this.setState({
      [e]: text.target.value,
    });
  };

  // 회원가입 버튼
  handleSignup = async () => {
    const { email, password, name, mobile } = this.state;
    try {
      const resp = await axios({
        method: "post",
        url: "http://localhost:5000/signup",
        data: {
          email,
          password,
          name,
          mobile,
        },
      });
      if (resp) {
        alert("회원가입이 완료되었습니다.");
        this.props.history.push("/");
      } else {
        alert("회원가입이 완료되지 않았습니다. 다시 시도해 주세요.");
      }
    } catch (err) {
      alert(err);
    }
  };

  // 뒤로 버튼
  handleGoBack = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div>Email</div>
        <input
          type="text"
          placeholder="Email을 입력하세요."
          onChange={this.handleInputInfo("email")}
        />
        <div>Password</div>
        <input
          type="password"
          placeholder="Password를 입력하세요."
          onChange={this.handleInputInfo("password")}
        />
        <div>Name</div>
        <input
          type="text"
          placeholder="이름을 입력하세요."
          onChange={this.handleInputInfo("name")}
        />
        <div>Mobile</div>
        <input
          type="text"
          placeholder="전화번호를 입력하세요."
          onChange={this.handleInputInfo("mobile")}
        />
        <div>
          <button onClick={this.handleSignup}>회원가입</button>
          <button onClick={this.handleGoBack}>뒤로</button>
        </div>
      </div>
    );
  }
}

export default Signup;
