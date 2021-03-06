//Sai Vaishnavi Jupudi (B00873534)
import React, { useContext, useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import image1 from "../../../assets/images/image1.png";
import "./Reserve.css";
import { Alert } from "@mui/lab";
import api from "common/api";
import { AppContext } from "AppContext";
import * as ActionTypes from "common/actionTypes";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 0",
  },
}));

export default function Reserve() {
  const {
    state: { authToken, cartItems },
    dispatch,
  } = useContext(AppContext);
  const classes = useStyles();
  const [roomType, setRoomType] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [propertyDetails, setPropertyDetails] = useState([]);
  const [propertyId, setPropertyId] = useState("");

  function callProperties(event) {
    event.preventDefault();
    if (validateDate(event)) {
      api.get("/getProperty/get-property-details").then((response) => {
        console.log(response["data"]);
        const filteredData = response["data"].filter(
          (property) =>
            new Date(property.availabilityStartDate).getTime() <=
            new Date(startDate).getTime()
        );
        if (filteredData.length) {
          setPropertyDetails(filteredData || []);
          setError("");
        } else {
          setPropertyDetails([]);
          setError("There are no rooms available for selected dates");
        }
      });
    } else {
      setError("The end date cannot be before start date");
    }
  }

  function addToCart(id, rent) {
    var postData = {
      property: id,
      fromDate: startDate,
      toDate: endDate,
      noOfOccupants: 1,
      calculatedRent: rent,
    };

    api
      .post("/cart/add", postData, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: ActionTypes.SET_CART,
            data: parseInt(cartItems) + 1,
          });
          setPropertyId(id);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        }
      });
  }

  function validateDate(event) {
    event.preventDefault();
    if (endDate < startDate) {
      return false;
    }
    return true;
  }

  function properties() {
    return propertyDetails;
  }

  function displayProperties() {
    if (propertyDetails) {
      return (
        <>
          <div className="prop-parent">
            {properties().map((data, id) => (
              <div className="each-prop" key={id}>
                <div className="prop-pic">
                  <img className="col" src={image1} alt="Not found" />
                </div>

                <div className="prop-desc">
                  <Typography
                    variant="button"
                    display="block"
                    gutterBottom
                    color="royalblue"
                  >
                    {data.propertyTitle}
                  </Typography>
                  <Typography
                    variant="button"
                    display="block"
                    gutterBottom
                    color="royalblue"
                  >
                    Rent: {data.rent} per month
                  </Typography>
                  <Typography
                    variant="button"
                    display="block"
                    gutterBottom
                    color="royalblue"
                  >
                    Amenities Include:
                  </Typography>
                  <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                    color="darkslateblue"
                  >
                    {data.amenities}
                  </Typography>

                  <div className="button-center">
                    <Button
                      variant="contained"
                      className="cart-button"
                      onClick={() => addToCart(data._id, data.rent)}
                    >
                      Add To Cart
                    </Button>
                  </div>

                  {propertyId === data._id && success && (
                    <Alert severity="success">
                      Property has been added to cart
                    </Alert>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
  }
  return (
    <Box className={classes.root} container>
      <div className="form-parent">
        <div className="form-feild">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Room Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Room Type"
              value={roomType}
              onChange={(e) => {
                setRoomType(e.target.value);
              }}
            >
              <MenuItem value="room">Room</MenuItem>
              <MenuItem value="house">Entire House</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-feild">
          <TextField
            variant="outlined"
            color="secondary"
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
        </div>
        <div className="form-feild">
          <TextField
            variant="outlined"
            color="secondary"
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>
        <div className="search">
          <Button variant="contained" onClick={callProperties}>
            Search
          </Button>
        </div>
      </div>

      {error ? (
        <div style={{ marginLeft: "5px" }}>
          <Alert severity="error">{error} </Alert>{" "}
        </div>
      ) : (
        displayProperties()
      )}
    </Box>
  );
}
