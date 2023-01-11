/* eslint-disable react-hooks/exhaustive-deps */
import BloodsuckerAnimation from "../../components/BloodsuckerAnimation/BloodsuckerAnimation";
import { setIntroDisplayed, setTheme } from "../../store/sessionSlice/sessionSlice";
import { getTranslatedLabel } from "../../common/labels/utils";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = (): JSX.Element => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const { theme: themeState, introDisplayed } = useSelector(
    (state: RootState) => state.session
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hideLogoOverlay = () => {
    setTimeout(() => dispatch(setIntroDisplayed(true)), 2500);
  };

  useEffect(() => {
    if (isDarkModeEnabled) {
      dispatch(setTheme("dark"));
    } else dispatch(setTheme("light"));
    hideLogoOverlay();
  }, []);

  useEffect(() => {
    if (isDarkModeEnabled) {
      dispatch(setTheme("dark"));
    } else dispatch(setTheme("light"));
  }, [isDarkModeEnabled]);

  return (
    <Box className="home">
      {!introDisplayed && (
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
          onClick={() => navigate("/about-alberto")}
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
          onClick={() => navigate("/about-code")}
        >
          {getTranslatedLabel("global.aboutCode")}
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
