import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppPosts from "./pages/AppPosts";

export default function Router() {
  return (
    <div>
        <Switch>
          <Route path="/">
            <Redirect to="/posts" />
          </Route>
          <Route path="/posts">
            <AppPosts />
          </Route>
        </Switch>
    </div>
  );
}
