import React from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";

//! User Files

import App from "app/App";
import Error from "common/Error";
import { ROUTES } from "common/constants";
import Login from "modules/auth/login";
import Signup from "modules/auth/signup";
import PrivateRoute from "PrivateRoute";
import Homepage from "modules/home";

function Routing() {
  const location = useLocation();
  const openPages = [
    {
      pageLink: ROUTES.HOME,
      view: Homepage,
    },
    {
      pageLink: ROUTES.LOGIN,
      view: Login,
    },
    {
      pageLink: ROUTES.SIGNUP,
      view: Signup,
    },
    {
      pageLink: ROUTES.ERROR,
      view: Error,
    },
  ];

  const routes = (
    <Routes location={location}>
      {openPages.map((page, index) => {
        return (
          <Route
            exact
            path={page.pageLink}
            element={<page.view />}
            key={index}
          />
        );
      })}
      <Route exact path={ROUTES.HOME} element={<PrivateRoute />}>
        <Route exact path={ROUTES.MAIN} element={<App />} />
      </Route>
      <Route path={ROUTES.UNKNOWN} element={<Navigate to={ROUTES.ERROR} />} />
    </Routes>
  );

  return <div className="container">{routes}</div>;
}

export default Routing;
