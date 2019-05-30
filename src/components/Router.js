import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
const Router = () => (
  <BrowserRouter>
    <Router path="/" component={App} />
  </BrowserRouter>
);