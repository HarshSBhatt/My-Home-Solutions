// Author: Harsh Bhatt (B00877053)

import { Chip, Grid, Paper, Typography, Button } from "@mui/material";
import React, { useState, forwardRef, useContext } from "react";
import moment from "moment";
import api from "common/api";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AppContext } from "AppContext";

const EAlert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function BookingBlock({ booking }) {
  const {
    state: { authToken },
  } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

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

  const handleCancelBooking = async () => {
    setLoading(true);
    try {
      const body = {
        bookingId: _id,
      };
      await api.post("/booking/booking-cancellation", body, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setOpen(true);
      setSuccess(
        "Booking cancelled successfully! Your money will be credited in a few business days"
      );
      setError("");
      window.location.reload();
    } catch (error) {
      setOpen(true);
      if (error.response?.data) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {error && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <EAlert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {error}
          </EAlert>
        </Snackbar>
      )}
      {success && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <EAlert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            {success}
          </EAlert>
        </Snackbar>
      )}
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
                <Typography gutterBottom variant="body2" component="div">
                  To Date:{" "}
                  {moment(propertyItems?.[0].toDate).format("MMMM D, YYYY")}
                </Typography>
                {status !== "booking_status_cancelled" && (
                  <Button
                    variant="contained"
                    disabled={loading}
                    onClick={handleCancelBooking}
                  >
                    Cancel
                  </Button>
                )}
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
