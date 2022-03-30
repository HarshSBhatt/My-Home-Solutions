import React, { useContext, useState, useEffect } from "react";
import { IconButton, ListItem, ListItemText, Typography, } from "@mui/material";
import { AppContext } from "AppContext";
import api from "common/api";
import DeleteIcon from '@mui/icons-material/Delete';

function CartTotals({ cartList }) {
    let total = 0
    cartList.forEach(cartItem => {    
        total += cartItem.calculatedRent
    })
    
    return (
        <div>
            <br></br>
            <h3>Total Rent: {total}</h3>
            <h3>Convenience fee: </h3>
            <h3>Sub Total Rent: </h3>
        </div>
    );
}

export default CartTotals;
