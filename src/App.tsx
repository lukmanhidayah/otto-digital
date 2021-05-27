import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import "./App.css";
import { useSelector } from "react-redux";
import IsNullOrEmpty from "./utils/IsNullOrEmpty";

const App = () => {
  const user = useSelector((state: any) => state.user.user);

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
        {IsNullOrEmpty(user.role) ? (
          <>
            <Route path={"/login"} exact={true} component={Login} />
            <Redirect from="/" to="/login" />
          </>
        ) : (
          <>
            <Route path={"/operation"} component={Home} />
            <Route path={"/sales"} component={Home} />
            <Redirect from="/" to="/operation" />
          </>
        )}
      </Switch>
    </div>
  );
};

export default App;
