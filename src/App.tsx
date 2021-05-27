import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/dashboard/Dashboard";

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
            {user.menu.map((res: any) => {
              return (
                <Route
                  path={`/${res.split(" ")[1]?.toLowerCase()}`}
                  component={Home}
                />
              );
            })}
            <Redirect from="/" to={`/${user.menu[0].split(" ")[1]?.toLowerCase()}`} />
          </>
        )}
      </Switch>
    </div>
  );
};

export default App;
