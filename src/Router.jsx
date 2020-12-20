import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Autorization from "./pages/Authorization/Authorization";
import { Home } from "./pages/Home/Home";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/autorization" component={Autorization}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/" component={Landing}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
