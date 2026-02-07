import type { RouteObject } from "react-router";
import React from "react";

import Page from "./page";
import NotFound from "./__create/not-found";

const routes: RouteObject[] = [
  { path: "/", element: React.createElement(Page) },
  { path: "*", element: React.createElement(NotFound) },
];

export default routes;
