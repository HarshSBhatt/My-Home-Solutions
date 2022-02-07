import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../common/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Homepage</Button>
    </ThemeProvider>
  );
}

export default App;
