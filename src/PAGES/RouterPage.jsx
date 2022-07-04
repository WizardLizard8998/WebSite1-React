import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import KAppBar from "../COMPONENTS/AppBar";
import BlogPage from "./BlogPage";
import MainPage from "./MainPage";

function RouterPage() {
  return (
    <>
      <Router>
        <KAppBar />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/Blog">
            <BlogPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default RouterPage;
