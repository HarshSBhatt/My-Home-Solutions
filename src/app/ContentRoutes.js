// Author: Harsh Bhatt (B00877053)

import { ROUTES } from "common/constants";
import Dashboard from "modules/dashboard";
import Profile from "modules/profile";
import Settings from "modules/settings";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Reserve from "../modules/reserve/components/Reserve";
import BookingConfirmation from "../modules/reserve/components/BookingConfirmation";
import MyBookings from "../modules/reserve/components/MyBookings";

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
      pageLink: ROUTES.RESERVE,
      view: Reserve,
    },
    {
      pageLink: ROUTES.MY_BOOKINGS,
      view: MyBookings,
    },
    {
      pageLink: ROUTES.BOOKING_CONFIRMATION,
      view: BookingConfirmation,
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
