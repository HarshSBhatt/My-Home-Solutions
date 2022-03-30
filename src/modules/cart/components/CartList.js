import React, { useContext, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { AppContext } from "AppContext";
import api from "common/api";
import CartItem from "./CartItem";
import { Box } from "@mui/system";
import CartTotals from "./CartTotals";

function CartList({ title, value }) {

    const { state } = useContext(AppContext);
    const { role, authenticated } = state;
    const [cartList, setCartList] = useState([]);
    const [totalRent, setTotalRent] = useState([]);

    console.log("CartList userID: ", state.currentUser.user_id)

    useEffect(() => {
        async function getCartDetailsFromDB() {
            try {
                const res = await api.get(`/cart/view`, {
                    headers: {
                        Authorization: `Bearer ${state.authToken}`
                    },
                });
                setCartList(res.data.cartItems.cartItems)
                console.log("getCartDetailsFromDB cartList is set as:", cartList);
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
            console.log("Handling Deletion for id: ", id)
            const res = await api.delete(`/cart/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${state.authToken}`
                },
            });
            console.log("handleDeletion cartList is set as:", cartList);
            if (res.status === 200) {
                const res = await api.get(`/cart/view`, {
                    headers: {
                        Authorization: `Bearer ${state.authToken}`
                    },
                });
                setCartList(res.data.cartItems.cartItems)
                console.log("handleDeletion cartList is set as:", cartList);
            }
        } catch (error) {
            alert("Something went wrong!");
            console.log(error);
        }

    }

    return (
        <div>
            <Box display="flex">
                <Grid container direction={'row'} spacing={1} columns={16} margin={5}>
                    <h3>Your Cart</h3>
                    <Grid item>
                        {getCartList().map((cartItem, id) => (
                            <CartItem value={cartItem} key={cartItem.id} handleDeletion={() => handleDeletion(cartItem._id)}></CartItem>
                        ))}
                    </Grid>
                </Grid>

                <Grid container direction={'row'} spacing={1} columns={16} margin={5}>
                    <h3>Your Totals</h3>
                    <CartTotals cartList={cartList}></CartTotals>
                    <br></br>
                    <Grid item xs={12} md={3}>
                        {/* <Button variant="contained" onClick={callBooking} >Checkout</Button> */}
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default CartList;
