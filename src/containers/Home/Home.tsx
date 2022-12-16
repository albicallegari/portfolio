/* eslint-disable react-hooks/exhaustive-deps */
import RiveComponents from "../../components/RiveComponents/RiveComponents";
import { Alignment, Fit, Layout } from "@rive-app/react-canvas";
import { setTheme } from "../../store/sessionSlice/sessionSlice";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import BB from "../../assets/rive/bloodsucker-b.riv";
import BW from "../../assets/rive/bloodsucker-w.riv";
import { RootState } from "../../store";
import { useEffect } from "react";
import "./Home.scss";

const Home = (): JSX.Element => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const { theme: themeState } = useSelector((state: RootState) => state.session);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDarkModeEnabled) {
      dispatch(setTheme("dark"));
    } else dispatch(setTheme("light"));
  }, [isDarkModeEnabled]);

  return (
    <Box className="home">
      <Box className="home_container">
        {themeState === 'dark' && (
          <RiveComponents
            src={BB}
            animation="Floating"
            layout={
              new Layout({ fit: Fit.Contain, alignment: Alignment.Center })
            }
          />
        )} 
        {themeState === 'light' && (
          <RiveComponents
            src={BW}
            animation="Floating"
            layout={
              new Layout({ fit: Fit.Contain, alignment: Alignment.Center })
            }
          />
        )}
        <Button
          sx={{ color: themeState === 'dark' ? "white" : "black", fontSize: '1rem' }}
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
