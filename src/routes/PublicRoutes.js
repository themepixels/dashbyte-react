import React from "react";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import Signin2 from "../pages/Signin2";

const publicRoutes = [
  { path: "pages/signin", element: <Signin /> },
  { path: "pages/signin2", element: <Signin2 /> },
  { path: "pages/error-404", element: <NotFound /> }
];

export default publicRoutes;