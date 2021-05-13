import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";

const App = () => {
  return (
    <div>
      <Route path="/" component={Login} exact />
      <Route path="/main" component={Main} />
    </div>
  );
};

export default App;
