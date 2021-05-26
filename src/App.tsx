import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

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
        <Route path={"/operator"} component={Home} />
        <Route path={"/sales"} component={Home} />
        <Route path={"/admin"} component={Home} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
};

export default App;
