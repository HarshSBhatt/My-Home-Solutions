import image1 from "../images/image1.jpg";
import React, { Component } from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./MyListings.css";
//import toast, { Toaster } from "react-hot-toast";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stack,
  TextField,
  Grid,
} from "@mui/material";
import { spacing } from "@mui/system";
import EditListing from "./EditListing";
import { AppContext } from "AppContext";
export default function MyListings() {

  const {state:{userId}} = useContext(AppContext);
  
  const [allRecords, setAllRecords] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  // const navigate = useNavigate();
  const api_url = `http://localhost:5000/api/property-routes/get-rental-properties/`;
  useEffect(() => {
    axios.get(api_url).then((res) => {
      console.log(res.data[0]);
      setAllRecords(res.data);
    });
  }, []);

  console.log(userId)
  console.log(allRecords);

  const handleModify = async (id) => {
    //<EditListing responseDetails={res}></EditListing>
    console.log("user id ",userId);
    navigate(`/app/edit-listing/${id}`);
  };

  return (
    <div>
      <h2>
        <center>My Listings</center>
      </h2>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        marginTop={0}
      >
        <Grid container spacing={8} columns={10} margin={10}>
          {allRecords.map((r) => (
            <Grid item xs={10} md={16} margin={3}>
              <label>
                Apartment Name:<p>{r.propertyTitle}</p>
              </label>
              <br />
              <label>
                Rent:
                <p>{r.rent}</p>
              </label>
              {/* MODIFY BUTTON */}
              <Button
                key = {r._id}
                variant="contained"
                sx={{ m: 10 }}
                onClick={() => handleModify(r._id)}
              >
                Modify
              </Button>

              {/* DELETE BUTTON */}
              {/*  onClick={() => handleModify(r.id)} */}
              {/* <Button variant="contained" onClick = {() => handleDelete(r._id)}>
                Delete
              </Button> */}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
