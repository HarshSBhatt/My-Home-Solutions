import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#373373",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Montserrat Medium", "sans-serif"].join(","),
  },
});

export default theme;
