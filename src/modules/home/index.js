// import { ROUTES } from "common/constants";
// import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function Homepage() {
  // const navigate = useNavigate();
  // TODO: remove this after homepage setup
  useEffect(() => {
    // navigate(ROUTES.LOGIN_SEEKER);
    // eslint-disable-next-line
  }, []);
  return <div>This is homepage</div>;
}

export default Homepage;
