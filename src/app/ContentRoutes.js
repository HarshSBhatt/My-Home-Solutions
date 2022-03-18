// Author: Harsh Bhatt (B00877053)

import { ROUTES } from "common/constants";
import Dashboard from "modules/dashboard";
import Profile from "modules/profile";
import MyAccount from "modules/profile/components/MyAccount";
import Settings from "modules/settings";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

function ContentRoutes() {
  const privatePages = [
    {
      pageLink: ROUTES.DASHBOARD,
      view: Dashboard,
    },
    {
      pageLink: ROUTES.SETTINGS,
      view: Settings,
    },
    {
      pageLink: ROUTES.PROFILE,
      view: Profile,
    },
    {
      pageLink: ROUTES.MY_ACCOUNT,
      view: MyAccount,
    },
  ];
  //! Note: All the private routes will be defined here
  const renderRoutes = (
    <Routes>
      {privatePages.map((page, index) => {
        return (
          <Route
            exact
            path={page.pageLink}
            element={<page.view />}
            key={index}
          />
        );
      })}
      <Route path={ROUTES.UNKNOWN} element={<Navigate to={ROUTES.ERROR} />} />
    </Routes>
  );

  return renderRoutes;
}

export default ContentRoutes;
