import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Reply from "./pages/reply/Reply";
import Schedule from "./pages/schedule/Schedule";
import Home from "./pages/home/Home";
import Message from "./pages/message/Message";
import History from "./pages/history/History";
import Category from "./pages/category/Category";

import "./App.css";

const App = () => {
  useEffect(() => {
    const rootSpinner = document.getElementById("spinner");
    const body = document.getElementById("body");
    setTimeout(() => {
      if (rootSpinner) {
        rootSpinner.remove();
      }
      if (body) {
        body.style.overflowY = "auto";
      }
    }, 1000);
  }, []);

  return (
    <div className="app">
      <div id="modal-root" />
      <Switch>
        <Route path={"/login"} exact={true} component={Login} />
        <Route path={"/registration"} component={Registration} />
        <Route path={"/home"} component={Home} />
        <Route path={"/category"} component={Category} />
        <Route path={"/message"} component={Message} />
        <Route path={"/reply"} component={Reply} />
        <Route path={"/schedule"} component={Schedule} />
        <Route path={"/history"} component={History} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
};

export default App;
