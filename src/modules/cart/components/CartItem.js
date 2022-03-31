
import { IconButton, ListItem, ListItemText, Typography, } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import moment from "moment";
import React, { useContext, useState, useEffect } from "react";
import api from "common/api";
import { AppContext } from "AppContext";

function CartItem({ value, handleDeletion }) {
    const { state } = useContext(AppContext);

    useEffect(() => {
        async function getPropertyDetails() {
            const res = await api.get(`/property-routes/get-rental-property/${value.property}`, {
                headers: {
                    Authorization: `Bearer ${state.authToken}`
                },
            });
        }
        getPropertyDetails()
    }, []);


    return (
        <div>
            <ListItem alignItems="flex-start" sx={{ divider: true }} secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeletion(value._id)}>
                    <DeleteIcon />
                </IconButton>
            } >
                <ListItemText
                    primary={<strong>Booking for property ID: {value.property}</strong>}
                    secondary={
                        <>
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                From: {moment(new Date(value.fromDate)).format("DD/MM/YYYY")}
                                <br></br>To: {moment(new Date(value.toDate)).format("DD/MM/YYYY")}
                                <br></br>Occupants: {value.noOfOccupants}
                                <br></br>Rent: {value.calculatedRent}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
        </div>
    );
}
export default CartItem;
