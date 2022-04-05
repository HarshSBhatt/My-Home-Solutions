// Author: Harsh Bhatt (B00877053)

// import { ROUTES } from "common/constants";
// import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import ProductHero from "./components/Jumbotron";
import TwoBlocks from "./components/TwoBlocks";
import AddListingBlock from "./components/AddListingBlock";

function Homepage() {
  useEffect(() => {
    // navigate(ROUTES.LOGIN_SEEKER);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <ProductHero />
      <TwoBlocks />
      <AddListingBlock />
    </div>
  );
}

export default Homepage;
