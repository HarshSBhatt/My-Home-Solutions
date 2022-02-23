/* ROUTERS  */
export const ROUTES = {
  // COMMON ROUTES
  HOME: "/",
  LOGIN: "/login",
  LOGOUT: "/logout",
  SIGNUP: "/register",
  // Dashboard Routes
  MAIN: "/app/*",
  DASHBOARD: "/",
  TEST: "/test",
  USERS_MANAGEMENT: "/users",
  // MISC
  UNKNOWN: "*",
  ERROR: "/error",
};

/* Authentication */
export const TOKEN = "TOKEN";
export const USER = "USER";
export const ADMIN = "ADMIN";
export const USER_ID = "USER_ID";

export const ROLES = {
  SUPER_ADMIN: "Super admin",
  HOME_ADMIN: "Home Admin",
};
