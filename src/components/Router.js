import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

const Router = () => (
  <BrowserRouter>
    <switch>
      <Route path="/" component={App} />
      <Route path="/recipe" component={Recipe} />
    </switch>
  </BrowserRouter>
);
export default Router;