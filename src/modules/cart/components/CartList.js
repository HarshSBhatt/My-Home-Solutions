// Author: Namit Prakash Dadlani (B00873214)

import React, { useContext, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { AppContext } from "AppContext";
import api from "common/api";
import CartItem from "./CartItem";
import * as ActionTypes from "common/actionTypes";
import { Box } from "@mui/system";
import Payment from "modules/payment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cartBox: {
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 15,
    paddingBottom: 15,
    border: "0.5px solid black",
  },
  cartHeading: {
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    fontWeight: "bold",
    color: "#5048e5",
    borderBottom: "0.5px solid #5048e5",
  },
  cartEmpty: {
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
  },
}));

function CartList() {
  const { state, dispatch } = useContext(AppContext);
  const [cartList, setCartList] = useState([]);
  const [cartOuterId, setCartOuterId] = useState([]);
  const [cartTotals, setCartTotals] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function getCartDetailsFromDB() {
      try {
        const res = await api.get(`/cart/view`, {
          headers: {
            Authorization: `Bearer ${state.authToken}`,
          },
        });
        if (null !== res.data.cartItems) {
          setCartList(res.data.cartItems.cartItems);
          let tempCartList = res.data.cartItems.cartItems;
          let total = 0;
          tempCartList.forEach((cartItem) => {
            total += cartItem.calculatedRent;
          });
          try {
            var cartTotalsData = {
              totalRent: Math.floor(total),
              convenienceFee: Math.floor(total * 0.1),
              subTotal: Math.floor(total * 1.1),
            };
            await api.post("/cart/setCartTotals", cartTotalsData, {
              headers: { Authorization: `Bearer ${state.authToken}` },
            });
            await setCartTotals(cartTotalsData);
          } catch (e) {
            console.error(e);
          }
          setCartOuterId(res.data.cartItems._id);
        }
      } catch (e) {
        console.error(e);
      }
    }
    getCartDetailsFromDB();
    // eslint-disable-next-line
  }, []);

  function getCartList() {
    return cartList;
  }

  // handleDeletion: Handle the deletion of cart item on click of delete button in CartItem.
  const handleDeletion = async (id) => {
    try {
      const res = await api.delete(`/cart/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${state.authToken}`,
        },
      });
      if (res.status === 200) {
        const res = await api.get(`/cart/view`, {
          headers: {
            Authorization: `Bearer ${state.authToken}`,
          },
        });
        setCartList(res.data.cartItems.cartItems);
        dispatch({
          type: ActionTypes.SET_CART,
          data: parseInt(res.data.cartItems.cartItems.length),
        });
        let tempCartList = res.data.cartItems.cartItems;
        let total = 0;
        tempCartList.forEach((cartItem) => {
          total += cartItem.calculatedRent;
        });
        try {
          var cartTotalsData = {
            totalRent: Math.floor(total),
            convenienceFee: Math.floor(total * 0.1),
            subTotal: Math.floor(total * 1.1),
          };
          await api.post("/cart/setCartTotals", cartTotalsData, {
            headers: { Authorization: `Bearer ${state.authToken}` },
          });
          await setCartTotals(cartTotalsData);
        } catch (e) {
          console.error(e);
        }
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  // renderCartContent : Conditionally render cart content. If there is none, display a message.
  const renderCartContent = () => {
    if (getCartList().length === 0) {
      return (
        <h4 className={classes.cartEmpty}>
          Hey! Your cart is empty, please visit our amazing collection of
          properties and add them to cart.
        </h4>
      );
    } else {
      return getCartList().map((cartItem, id) => (
        <div key={cartItem._id}>
          <CartItem
            value={cartItem}
            handleDeletion={() => handleDeletion(cartItem._id)}
          ></CartItem>
        </div>
      ));
    }
  };

  // renderCheckoutButton : If cart is empty, disable the checkout button.
  const renderCheckoutButton = () => {
    return (
      <>
        <Payment
          items={cartList}
          disabled={getCartList().length === 0}
          total={cartTotals.subTotal}
          cartOuterId={cartOuterId}
        />
      </>
    );
  };

  return (
    <div>
      <Box display="flex">
        <Grid
          container
          spacing={1}
          columns={16}
          margin={5}
          className={classes.cartBox}
        >
          <Grid item>
            <div className={classes.cartHeading}>
              <h3>Your Cart</h3>
            </div>
            {renderCartContent()}
          </Grid>
        </Grid>

        <Grid container direction={"row"} spacing={1} columns={16} margin={5}>
          <Grid item>
            <h3>Total Rent: {cartTotals.totalRent}</h3>
            <h3>Convenience Fee: {cartTotals.convenienceFee}</h3>
            <h3>Total Amount: {cartTotals.subTotal}</h3>
            <br></br>
            {renderCheckoutButton()}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CartList;
