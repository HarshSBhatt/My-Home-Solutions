import { HistoryOutlined } from "@mui/icons-material";
import { Button, Snackbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppContext } from "AppContext";
import api from "common/api";
import Loading from "components/Loading";
import PageHeading from "components/PageHeading";
import MuiAlert from "@mui/material/Alert";
import React, { forwardRef, useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import BookingBlock from "./components/BookingBlock";
import { ROUTES } from "common/constants";
import { useNavigate } from "react-router-dom";

const EAlert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem 0",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  space: {
    padding: "0 1rem",
  },
}));

function BookingHistory() {
  const {
    state: { authToken },
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const fetchOrderHistory = async () => {
    setLoading(true);
    try {
      const res = await api.get("/order", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const { data } = res;

      if (data.success) {
        setOpen(true);
        setError("");
        setBookingHistory(data.bookingHistory);
      }
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

  const handleClick = () => {
    navigate(`/app${ROUTES.RESERVE}`);
  };

  useEffect(() => {
    fetchOrderHistory();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loading message="Loading your profile" />;
  return (
    <div>
      {error && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <EAlert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {error}
          </EAlert>
        </Snackbar>
      )}
      <PageHeading Icon={HistoryOutlined} heading="Booking History" />
      <Box className={classes.container} sx={{ marginX: 1 }}>
        {bookingHistory.length > 0 ? (
          bookingHistory.map((booking) => (
            <BookingBlock key={booking._id} booking={booking} />
          ))
        ) : (
          <Box display="flex" flexDirection="column">
            <Typography variant="button" display="block" gutterBottom>
              You do not have any bookings
            </Typography>
            <Button variant="contained" onClick={handleClick}>
              Book Now
            </Button>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default BookingHistory;
