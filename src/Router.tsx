import React, { lazy, Suspense } from "react";

import { Redirect, Route, Switch } from "wouter";

import Header from "./components/layout/Header";
import Loading from "./components/layout/Loading";

const HomePage = lazy(async () => await import("./pages"));
const UpcomingPage = lazy(async () => await import("./pages/upcoming"));
const PastPage = lazy(async () => await import("./pages/past"));
const NextPage = lazy(async () => await import("./pages/next"));

const Router: React.FC = () => (
  <>
    <Header />
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col relative h-full">
      <Switch>
        <Route path="/next">
          <Suspense fallback={<Loading />}>
            <NextPage />
          </Suspense>
        </Route>
        <Route path="/past">
          <Suspense fallback={<Loading />}>
            <PastPage />
          </Suspense>
        </Route>
        <Route path="/upcoming">
          <Suspense fallback={<Loading />}>
            <UpcomingPage />
          </Suspense>
        </Route>
        <Route path="/">
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  </>
);

export default Router;
