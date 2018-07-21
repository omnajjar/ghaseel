import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import ProfilePage from "../components/ProfilePage";
import NotFound from "../components/NotFound";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact={true} component={LoginPage} />
      <PrivateRoute path="/home" component={HomePage} />
      <PrivateRoute path="/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
