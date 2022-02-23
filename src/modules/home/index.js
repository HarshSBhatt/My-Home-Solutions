import { ROUTES } from "common/constants";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  // TODO: remove this after homepage setup
  useEffect(() => {
    navigate(ROUTES.LOGIN);
    // eslint-disable-next-line
  }, []);
  return <div>This is homepage</div>;
}

export default Homepage;
