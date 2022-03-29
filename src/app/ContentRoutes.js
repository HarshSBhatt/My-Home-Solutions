// Author: Harsh Bhatt (B00877053)

import { ROUTES } from "common/constants";
import admin from "modules/admin";
import Dashboard from "modules/dashboard";
import Profile from "modules/profile";
import Settings from "modules/settings";
import AdminDashboard from "modules/admin";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ListRoomOwners from "modules/admin/components/ListRoomOwners";
import ListRoomSeekers from "modules/admin/components/ListRoomSeekers";
import UnverifiedUser from "modules/admin/components/UnverifiedUser";
import RejectedUser from "modules/admin/components/RejectedUser";

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
    //Author: Arunkumar Gauda - B00871355
    {
      pageLink: ROUTES.ADMINDASHBOARD,
      view: AdminDashboard,
    },
    {
      pageLink: ROUTES.LISTROOMOWNERS,
      view: ListRoomOwners,
    },
    {
      pageLink: ROUTES.LISTROOMSEEKERS,
      view: ListRoomSeekers,
    },
    {
      pageLink: ROUTES.UNVERIFIEDROOMOWNERS,
      view: UnverifiedUser,
    },
    {
      pageLink: ROUTES.REJECTEDUSERS,
      view: RejectedUser,
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
