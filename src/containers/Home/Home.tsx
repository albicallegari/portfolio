/* eslint-disable react-hooks/exhaustive-deps */
import BloodsuckerAnimation from "../../components/BloodsuckerAnimation/BloodsuckerAnimation";
import { setTheme } from "../../store/sessionSlice/sessionSlice";
import { getTranslatedLabel } from "../../common/labels/utils";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import "./Home.scss";

const Home = (): JSX.Element => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const { theme: themeState } = useSelector(
    (state: RootState) => state.session
  );
  const dispatch = useDispatch();

  const [isIntroVisible, setIsIntroVisible] = useState(true);

  const hideLogoOverlay = () => {
    setTimeout(() => setIsIntroVisible(false), 2500);
  };

  useEffect(() => {
    if (isDarkModeEnabled) {
      dispatch(setTheme("dark"));
    } else dispatch(setTheme("light"));
    // hideLogoOverlay();
  }, []);

  useEffect(() => {
    if (isDarkModeEnabled) {
      dispatch(setTheme("dark"));
    } else dispatch(setTheme("light"));
  }, [isDarkModeEnabled]);

  return (
    <Box className="home">
      {isIntroVisible && (
        <div className="home_overlay">
          <div className="home_overlay_container">
            <div className="home_overlay_container_a">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>Alberto</h3>
          </div>
        </div>
      )}
      <Box className="home_container">
        <BloodsuckerAnimation theme={themeState} />
        <Button
          sx={{
            color: themeState === "dark" ? "white" : "black",
            fontSize: "1rem",
            fontFamily: "Nunito, sans-serif",
          }}
          className="home_container_linkTo_upsx"
          onClick={() => (window.location.href = "/about-alberto")}
        >
          {getTranslatedLabel("global.aboutAlb")}
        </Button>
        <Button
          sx={{
            color: themeState === "dark" ? "white" : "black",
            fontSize: "1rem",
            fontFamily: "Nunito, sans-serif",
          }}
          className="home_container_linkTo_updx"
          onClick={() => (window.location.href = "/about-code")}
        >
          {getTranslatedLabel("global.aboutCode")}
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
