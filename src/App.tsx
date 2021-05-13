import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Category from "./pages/category/Category";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Registration from "./pages/registration/Registration";
import Transaction from "./pages/transaction/Transaction";

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
        <Route path={"/dashboard"} component={Dashboard} />
        <Route path={"/category"} component={Category} />
        <Route path={"/product"} component={Product} />
        <Route path={"/transaction"} component={Transaction} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
};

export default App;
