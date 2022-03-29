// Author: Harsh Bhatt (B00877053)

import { ROUTES } from "common/constants";
import admin from "modules/admin";
import Dashboard from "modules/dashboard";
import Profile from "modules/profile";
import Settings from "modules/settings";
import RoomOwner from "modules/room_owner/components/AddProperty";
import MyListings from "modules/room_owner/components/MyListings";
import EditListing from "modules/room_owner/components/EditListing";
import AdminDashboard from "modules/admin";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Reserve from "../modules/reserve/components/Reserve";
import BookingConfirmation from "../modules/reserve/components/BookingConfirmation";
import MyBookings from "../modules/reserve/components/MyBookings";
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
