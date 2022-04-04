// Author: Sai Vaishnavi Jupudi (B00873534)

import * as React from "react";
import { Button, Typography } from "@mui/material";
import TwoBlockBg from "assets/images/twoblackbg.jpg";
import { ROUTES } from "../../../common/constants";
import { useNavigate } from "react-router";
import ImageSectionLayout from "../components/ImageSectionLayout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import TwoBlockOne from "assets/images/twoblockone.jpg"
import TwoBlockTwo from "assets/images/twoblocktwo.jpg";
import Grid from '@mui/material/Grid';

export default function TwoBlocks() {
    const navigate = useNavigate();
    return (
        <ImageSectionLayout
            sxBackground={{
                backgroundImage: `url(${TwoBlockBg})`,
                backgroundColor: "#7fc7d9", // Average color of the background image.
                backgroundPosition: "center",
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img style={{ display: "none", height: '100vh' }} src={TwoBlockBg} alt="increase priority" />
            <Typography color="inherit" align="center" variant="h2" marked="center" sx={{ mt: 10 }}>
                SOLUTION FOR ALL YOUR NEEDS
            </Typography>
            <div sx={{ mt: 20 }}>
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image= {TwoBlockOne}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        SELECT A HOUSE
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        My Home provides the flexibility to let the user choose between a house or a room.
                                        By selecting an entire house the user will have the entire house for himself.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm = {12} md={6}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image= {TwoBlockTwo}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        SELECT A ROOM
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        My Home provides the flexibility to let the user choose between a house or a room.
                                        By selecting a room the user will have to be in the house on a sharing basis.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    </Grid>
            </div>

        </ImageSectionLayout>
    );
}
