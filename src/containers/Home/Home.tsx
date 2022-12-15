/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, useMediaQuery } from "@mui/material";
import "./Home.scss";

const Home = (): JSX.Element => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <Box className="home">
      <Box className="home_container">
        <Button
          sx={{ color: isDarkModeEnabled ? "white" : "black" }}
          className="home_container_linkTo_upsx"
          onClick={() => (window.location.href = "/bubble-chart")}
        >
          Bubble Chart
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
