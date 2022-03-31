import React, { useContext, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { AppContext } from "AppContext";
import api from "common/api";
import CartItem from "./CartItem";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

function CartList({ title, value }) {

    const { state } = useContext(AppContext);
    const { role, authenticated } = state;
    const [cartList, setCartList] = useState([]);
    const [cartOuterId, setCartOuterId] = useState([]);
    const [cartTotals, setCartTotals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getCartDetailsFromDB() {
            try {
                const res = await api.get(`/cart/view`, {
                    headers: {
                        Authorization: `Bearer ${state.authToken}`
                    },
                });
                setCartList(res.data.cartItems.cartItems)
                let tempCartList = res.data.cartItems.cartItems
                let total = 0
                tempCartList.forEach(cartItem => {
                    total += cartItem.calculatedRent
                })
                try {
                    // Setting cartTotalsData
                    var cartTotalsData = {
                        totalRent: Math.floor(total),
                        convenienceFee: Math.floor(total * 0.1),
                        subTotal: Math.floor(total * 1.1)
                    };
                    await api.post("/cart/setCartTotals", cartTotalsData, {
                        headers: { Authorization: `Bearer ${state.authToken}` },
                    })
                    await setCartTotals(cartTotalsData)
                } catch (e) {
                    console.error(e);
                }


                setCartOuterId(res.data.cartItems._id)
            } catch (e) {
                console.error(e);
            }
        }
        getCartDetailsFromDB();
    }, []);

    function getCartList() {
        return cartList;
    }

    const handleDeletion = async (id) => {
        try {
            const res = await api.delete(`/cart/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${state.authToken}`
                },
            });
            if (res.status === 200) {
                const res = await api.get(`/cart/view`, {
                    headers: {
                        Authorization: `Bearer ${state.authToken}`
                    },
                });
                setCartList(res.data.cartItems.cartItems)
                let tempCartList = res.data.cartItems.cartItems
                let total = 0
                tempCartList.forEach(cartItem => {
                    total += cartItem.calculatedRent
                })
                try {
                    // Setting cartTotalsData
                    var cartTotalsData = {
                        totalRent: Math.floor(total),
                        convenienceFee: Math.floor(total * 0.1),
                        subTotal: Math.floor(total * 1.1)
                    };
                    await api.post("/cart/setCartTotals", cartTotalsData, {
                        headers: { Authorization: `Bearer ${state.authToken}` },
                    })
                    await setCartTotals(cartTotalsData)
                } catch (e) {
                    console.error(e);
                }
            }
        } catch (error) {
            alert("Something went wrong!");
            console.log("CartList.handleDeletion error: ", error.message);
        }

    }

    function callBooking(id) {
        var sendData = {
            cartId: id
        }
        api.post('booking/booking-confirmation', sendData, {
            headers: {
                Authorization: `Bearer ${state.authToken}`
            },
        }).then(response => {
            navigate('/app/booking-confirmation', {
                state: { ...response.data }
            });
        });
    }

    return (
        <div >
            <Box display="flex">
                <Grid container direction={'row'} spacing={1} columns={16} margin={5}>
                    <h3>Your Cart</h3>
                    <Grid item>
                        {getCartList().map((cartItem, id) => (
                            <CartItem key={cartItem._id} value={cartItem} handleDeletion={() => handleDeletion(cartItem._id)}></CartItem>
                        ))}
                    </Grid>
                </Grid>

                <Grid container direction={'row'} spacing={1} columns={16} margin={5}>
                    <Grid item>
                        <h3>Total Rent: {cartTotals.totalRent}</h3>
                        <h3>Convenience Fee: {cartTotals.convenienceFee}</h3>
                        <h3>Total Amount: {cartTotals.subTotal}</h3>
                        <br></br>
                        <Button variant="contained" onClick={() => callBooking(cartOuterId)} >Checkout</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default CartList;
