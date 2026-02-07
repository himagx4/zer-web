import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

import routes from "./routes.client";

const router = createBrowserRouter(routes);

hydrateRoot(document, <RouterProvider router={router} />);
