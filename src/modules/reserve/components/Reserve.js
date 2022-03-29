//Sai Vaishnavi Jupudi (B00873534)
import React, { useContext, useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Grid,
} from "@mui/material";
import image1 from "../../../assets/images/image1.png";
import "./Reserve.css";
import { Alert } from "@mui/lab";
import api from "common/api";
import { AppContext } from "AppContext";

export default function Reserve() {
  const {
    state: { authToken },
  } = useContext(AppContext);
  const [roomType, setRoomType] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [propertyDetails, setPropertyDetails] = useState([]);

  function callProperties(event) {
    event.preventDefault();
    if (validateDate(event)) {
      api.get("/getProperty/get-property-details").then((response) => {
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
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        }
      });
  }

  // function callBooking(){
  //
  //     var sendData ={
  //         cartId:"62421976deb7fe46e341ea6d"
  //     }
  //     api.post('booking/booking-confirmation', sendData).then(response => {
  //         navigate('/app/booking-confirmation', {
  //             state: {...response.data}
  //         });
  //
  //     });
  // }

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
          {properties().map((data, id) => (
            <Grid container spacing={2} columns={16} margin={10} key={id}>
              <Grid item xs={12} md={6}>
                {/*<Carousel>*/}
                {/*    /!*{data.propertyPictures.map((picture) => <img key={picture} className="col" src={image1} alt="image" />)}*!/*/}
                {/*    */}
                {/*</Carousel>*/}
                <img className="col" src={image1} alt="Not found" />
              </Grid>

              <Grid item xs={12} md={6} marginLeft={20} marginTop={10}>
                <p>{data.propertyTitle}</p>
                <p>{data._id}</p>
                {/*<p>Available Rooms: {data.totalRooms}</p>*/}
                <p>Rent: {data.rent} per month</p>
                <p>
                  {" "}
                  Amenities Include:
                  {data.amenities.map((amenity) => (
                    <Button key={amenity} variant="text">
                      {amenity}
                    </Button>
                  ))}
                </p>
                <Button
                  variant="contained"
                  onClick={() => addToCart(data._id, data.rent)}
                >
                  Add To Cart
                </Button>

                {success && (
                  <Alert severity="success">
                    Property has been added to cart
                  </Alert>
                )}
              </Grid>
            </Grid>
          ))}
        </>
      );
    }
  }
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      marginTop={3}
    >
      <Grid item xs={12} md={3}>
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
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          variant="outlined"
          color="secondary"
          type="date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          variant="outlined"
          color="secondary"
          type="date"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Button variant="contained" onClick={callProperties}>
          Search
        </Button>
      </Grid>
      {/*<Grid item xs={12} md={3}>*/}
      {/*    <Button variant="contained" onClick={callBooking} >Test</Button>*/}
      {/*</Grid>*/}
      {error ? (
        <div style={{ marginLeft: "5px" }}>
          <Alert severity="error">{error} </Alert>{" "}
        </div>
      ) : (
        displayProperties()
      )}
    </Grid>
  );
}
