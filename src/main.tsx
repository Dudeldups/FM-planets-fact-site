import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root, { rootLoader } from "./pages/Root/Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import Planet from "./pages/Planet/Planet";

import "./scss/main.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} loader={rootLoader} />
      <Route
        path=":planet"
        element={<Planet />}
        errorElement={<ErrorPage />}
        loader={rootLoader}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);