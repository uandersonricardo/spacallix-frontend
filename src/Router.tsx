import React from "react";

import { Redirect, Route, Switch } from "wouter";

import Header from "./components/layout/Header";
import HomePage from "./pages";

const Router: React.FC = () => (
  <>
    <Header />
    <main className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 flex relative">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  </>
);

export default Router;
