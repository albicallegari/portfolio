/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button } from "@mui/material";
import "./Home.scss";

const Home = (): JSX.Element => {
  return (
    <Box className="home">
      <Box className="home_container">
        <Button
          className="home_container_linkTo"
          onClick={() => (window.location.href = "/bubble-chart")}
        >
          Bubble Chart
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
