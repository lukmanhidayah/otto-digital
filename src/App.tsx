import { Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";

const App = () => {
  return (
    <div className="app">
      <div id="modal-root" />
      <Switch>
        <Route path={"/login"} exact={true} component={Login} />
        <Route path={"/registration"} exact={true} component={Registration} />
      </Switch>
    </div>
  );
};

export default App;
