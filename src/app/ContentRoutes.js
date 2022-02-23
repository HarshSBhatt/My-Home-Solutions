import { ROUTES } from "common/constants";
import Dashboard from "modules/dashboard";
import Test from "modules/test";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

function ContentRoutes() {
  const privatePages = [
    {
      pageLink: ROUTES.DASHBOARD,
      view: Dashboard,
    },
    {
      pageLink: ROUTES.TEST,
      view: Test,
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