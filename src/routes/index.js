import React from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";

//! User Files

import App from "app/App";
import Test from "modules/test";
import Error from "common/Error";

function Routing() {
  const location = useLocation();
  const pages = [
    {
      pageLink: "/",
      view: App,
    },
    {
      pageLink: "/test",
      view: Test,
    },
    {
      pageLink: "/error",
      view: Error,
    },
  ];

  const routes = (
    <Routes location={location}>
      {pages.map((page, index) => {
        return (
          <Route
            exact
            path={page.pageLink}
            element={<page.view />}
            key={index}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );

  return <div className="container">{routes}</div>;
}

export default Routing;
