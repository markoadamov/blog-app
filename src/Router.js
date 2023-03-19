import { Route, Switch, Redirect } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import AppPosts from "./pages/AppPosts";
import AddPost from "./pages/AddPost";


export default function Router() {
  return (
    <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/posts" />
          </Route>
          <Route path="/posts">
            <AppPosts />
          </Route>
          <Route path="/post/:id">
            <SinglePost />
          </Route>
          <Route path="/add">
            <AddPost />
          </Route>
          <Route path="/edit/:id">
            <AddPost />
          </Route>
        </Switch>
    </div>
  );
}