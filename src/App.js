import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import theme from "./common/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Hello</Button>
    </ThemeProvider>
  );
}

export default App;
