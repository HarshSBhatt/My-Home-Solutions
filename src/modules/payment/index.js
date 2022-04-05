import { Button } from "@mui/material";
import { AppContext } from "AppContext";
import api from "common/api";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import * as ActionTypes from "common/actionTypes";

function Payment({ items, total, disabled, cartOuterId }) {
  const navigate = useNavigate();
  const {
    state: { authToken },
    dispatch,
  } = useContext(AppContext);

  const makePayment = async (token) => {
    try {
      const body = {
        token,
        items,
        total,
      };
      await api.post("/payment/make", body, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const data = {
        cartId: cartOuterId,
      };

      const confirmResponse = await api.post(
        "/booking/booking-confirmation",
        data,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      dispatch({ type: ActionTypes.SET_CART, data: 0 });
      navigate("/app/booking-confirmation", {
        state: { ...confirmResponse.data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StripeCheckout
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      token={makePayment}
      name="My Home"
      amount={total * 100}
    >
      <Button variant="contained" disabled={disabled}>
        Checkout
      </Button>
    </StripeCheckout>
  );
}

export default Payment;
