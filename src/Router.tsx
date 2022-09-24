import React from "react";

import { Redirect, Route, Switch } from "wouter";

import HomePage from "./pages";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" component={HomePage} />
    <Route>
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default Router;
