import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="title">
        <h1>MyTodo</h1>
      </div>
      <div className="login_info">
        <h3>Email</h3>
        <input type="text" placeholder="Email을 입력하세요." />
        <h3>Email</h3>
        <input type="password" placeholder="Password를 입력하세요." />
      </div>
      <div className="login_submit">
        <button className="loginButton" onClick={() => alert("로그인")}>
          로그인
        </button>
        <button className="testButton" onClick={() => alert("로그인")}>
          체험판 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
