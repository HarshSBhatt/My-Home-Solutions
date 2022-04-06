// Author: Harsh Bhatt (B00877053)

import { Chip, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import moment from "moment";

function BookingBlock({ booking }) {
  const { _id, bookingAmount, status, propertyItems } = booking;
  const bookingStatus = {
    booking_status_confirmed: {
      label: "Confirm",
      color: "success",
    },
    booking_status_pending: {
      label: "Pending",
      color: "warning",
    },
    booking_status_failed: {
      label: "Failed",
      color: "error",
    },
    booking_status_cancelled: {
      label: "Cancelled",
      color: "info",
    },
  };
  return (
    <>
      <Paper
        sx={{
          p: 2,
          //   margin: "auto",
          marginY: 1,
          width: "80%",
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1" component="div">
                  {propertyItems?.[0].property.propertyTitle}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  ID: {_id}
                </Typography>
                <Typography variant="body2" component="div">
                  Room(s): {propertyItems?.[0].property.totalRooms}
                </Typography>
                <Typography variant="body2" component="div">
                  From Date:{" "}
                  {moment(propertyItems?.[0].fromDate).format("MMMM D, YYYY")}
                </Typography>
                <Typography variant="body2" component="div">
                  To Date:{" "}
                  {moment(propertyItems?.[0].toDate).format("MMMM D, YYYY")}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                CA$ {bookingAmount}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Chip
              label={bookingStatus[status].label}
              color={bookingStatus[status].color}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default BookingBlock;
