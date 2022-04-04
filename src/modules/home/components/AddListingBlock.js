// Author: Sai Vaishnavi Jupudi (B00873534)

import * as React from "react";
import { Button, Typography } from "@mui/material";
import RoomOwner from "assets/images/house.jpg";
import { useNavigate } from "react-router";
import ImageSectionLayout from "../components/ImageSectionLayout";
import Grid from '@mui/material/Grid';
import {ROUTES} from "../../../common/constants";

export default function AddListingBlock() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/app${ROUTES.RESERVE}`);
    };
    return (
        <ImageSectionLayout
            sxBackground={{
                backgroundImage: `url(${RoomOwner})`,
                backgroundColor: "#7fc7d9", // Average color of the background image.
                backgroundPosition: "center",
                height: '100vh',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img style={{ display: "none" }} src={RoomOwner} alt="increase priority" />
            <Typography color="inherit" align="center" variant="h2" marked="center" sx={{ mt: 15 }}>
               WANT TO LIST YOUR PROPERTY?
            </Typography>
            <Typography variant="body1" color="inherit"  align="center" gutterBottom sx={{ mt: 10 }}>
                List your property with MyHome for 0% charges. Get your property verified and gain the exposure to wider audience.
                Register now!
            </Typography>
            <Button
                color="primary"
                variant="contained"
                size="large"
                component="a"
                sx={{ minWidth: 200, mt: 15 }}
            >
                Register Property
            </Button>

        </ImageSectionLayout>
    );
}
