// Author: Harsh Bhatt (B00877053)

import { AccountCircle } from "@mui/icons-material";
import PageHeading from "common/PageHeading";
import React from "react";

function Profile() {
  return (
    <div>
      <PageHeading Icon={AccountCircle} heading="Profile" />
    </div>
  );
}

export default Profile;
