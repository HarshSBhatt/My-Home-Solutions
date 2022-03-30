
import { IconButton, ListItem, ListItemText, Typography, } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({ value, handleDeletion }) {

    return (
        <div>
            <ListItem alignItems="flex-start" sx={{ divider: true }} secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeletion(value._id)}>
                      <DeleteIcon />
                    </IconButton>
                  } >
                <ListItemText
                    primary={<strong>Booking for property ID: {value.property}</strong>}
                    secondary={
                        <>
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                From: {Date(value.fromDate)}
                                <br></br>To: {Date(value.toDate)}
                                <br></br>Occupants: {value.noOfOccupants}
                                <br></br>Rent: {value.calculatedRent}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
        </div>
    );
}
export default CartItem;
