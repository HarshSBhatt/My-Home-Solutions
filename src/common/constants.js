// Author: Harsh Bhatt (B00877053)

/* ROUTERS  */
export const ROUTES = {
  // COMMON ROUTES
  HOME: "/",
  LOGIN_SEEKER: "/login",
  LOGIN_OWNER: "/login-owner",
  LOGIN_ADMIN: "/login-admin",
  LOGOUT: "/logout",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/password-reset/:userId/:token",
  ACTIVATE_ACCOUNT: "/activate-account/:verificationToken",
  SIGNUP_SEEKER: "/register",
  SIGNUP_OWNER: "/register-owner",
  SIGNUP_ADMIN: "/register-admin",
  RESERVE: "/reserve",
  BOOKING_CONFIRMATION: "/booking-confirmation",
  MY_BOOKINGS: "/my-bookings",
  // Dashboard Routes
  MAIN: "/app/*",
  DASHBOARD: "/",
  MY_ACCOUNT: "/my-account",
  USERS_MANAGEMENT: "/users",
  SETTINGS: "/settings",
  PROFILE: "/profile",
  // MISC
  UNKNOWN: "*",
  ERROR: "/error",
  //Author Arunkumar Gauda - B00871355
  //Admin Routes
  ADMINDASHBOARD: "/admin-dashboard",
  LISTROOMOWNERS: "/admin-room-owners",
  LISTROOMSEEKERS: "/admin-room-seekers",
  UNVERIFIEDROOMOWNERS: "/admin-unverified-room-owners",
  REJECTEDUSERS: "/admin-rejectedusers",
};

/* Authentication */
export const TOKEN = "TOKEN";
export const USER = "USER";
export const ADMIN = "ADMIN";
export const USER_ID = "USER_ID";
export const ROLE = "ROLE";
export const ROOM_OWNER = "room_owner";
export const ROOM_SEEKER = "room_seeker";
export const SUPER_ADMIN = "super_admin";
export const gender = {
  male: "Male",
  female: "Female",
  prefer_not_to_say: "N/A",
};

export const ROLES = {
  SUPER_ADMIN: "Admin",
  ROOM_OWNER: "Owner",
  ROOM_SEEKER: "Seeker",
};

export const defaultRoute = {
  super_admin: `/app${ROUTES.ADMINDASHBOARD}`,
  room_owner: `/app/room-owner`,
  room_seeker: ROUTES.HOME,
};
