import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
    </Switch>
  );
};

export default Routes;
