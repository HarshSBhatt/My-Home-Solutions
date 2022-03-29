// Author: Harsh Bhatt (B00877053)

import { ROUTES } from "common/constants";
import Dashboard from "modules/dashboard";
import Profile from "modules/profile";
import Settings from "modules/settings";
import RoomOwner from "modules/room_owner/components/AddProperty";
import MyListings from "modules/room_owner/components/MyListings";
import EditListing from "modules/room_owner/components/EditListing";
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
      pageLink: ROUTES.ROOM_OWNER_PATH,
      view: RoomOwner,
    },
    {
      pageLink: ROUTES.ROOM_OWNER_LISTINGS_PATH,
      view: MyListings,
    },
    {
      pageLink: ROUTES.EDIT_LISTING_PATH,
      view: EditListing,
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
