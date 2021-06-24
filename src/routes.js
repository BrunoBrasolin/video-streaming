import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Video from "./pages/Video";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Video} />
      </Switch>
    </BrowserRouter>
  );
}