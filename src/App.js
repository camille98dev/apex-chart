import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BrushChart from "./Component/BrushChart";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav"></Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <BrushChart />
      </Box>
    </Box>
  );
};

export default App;
