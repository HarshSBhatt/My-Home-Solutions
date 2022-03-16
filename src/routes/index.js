import React, { useContext, useEffect } from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";

//! User Files

import * as ActionTypes from "common/actionTypes";
import App from "app/App";
import Error from "common/Error";
import { ROUTES, TOKEN } from "common/constants";
import Login from "modules/auth/login";
import Signup from "modules/auth/signup";
import PrivateRoute from "PrivateRoute";
import Homepage from "modules/home";
import ForgotPassword from "modules/auth/components/ForgotPassword";
import { AppContext } from "AppContext";
import jwtDecode from "jwt-decode";
import ResetPassword from "modules/auth/components/ResetPassword";

function Routing() {
  const { initializeAuth, dispatch } = useContext(AppContext);
  const location = useLocation();
  const openPages = [
    {
      pageLink: ROUTES.HOME,
      view: Homepage,
    },
    {
      pageLink: ROUTES.LOGIN_SEEKER,
      view: Login,
    },
    {
      pageLink: ROUTES.LOGIN_OWNER,
      view: Login,
    },
    {
      pageLink: ROUTES.LOGIN_ADMIN,
      view: Login,
    },
    {
      pageLink: ROUTES.SIGNUP_SEEKER,
      view: Signup,
    },
    {
      pageLink: ROUTES.SIGNUP_OWNER,
      view: Signup,
    },
    {
      pageLink: ROUTES.FORGOT_PASSWORD,
      view: ForgotPassword,
    },
    {
      pageLink: ROUTES.RESET_PASSWORD,
      view: ResetPassword,
    },
    {
      pageLink: ROUTES.ERROR,
      view: Error,
    },
  ];

  useEffect(() => {
    initializeAuth();
    if (localStorage.getItem(TOKEN)) {
      const token = localStorage.getItem(TOKEN);
      const decoded = jwtDecode(token);
      const expiresAt = decoded.exp;
      const currentTime = Date.now();

      if (expiresAt < currentTime / 1000) {
        dispatch({ type: ActionTypes.LOGOUT });
      }
    }
    // eslint-disable-next-line
  }, []);

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
