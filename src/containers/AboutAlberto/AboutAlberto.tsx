/* eslint-disable react-hooks/exhaustive-deps */
import FloatingScrollButton from "../../components/FloatingScrollButton/FloatingScrollButton";
import LinkedinProfile from "./components/LinkedinProfile/LinkedinProfile";
import BackNavButton from "../../components/BackNavButton/BackNavButton";
import { setTheme } from "../../store/sessionSlice/sessionSlice";
import { Box, useMediaQuery } from "@mui/material";
import vars from "../../styles/variables.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./AboutAlberto.scss";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import AboutTitle from "./components/AboutTitle/AboutTitle";

const AboutAlberto = () => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDarkModeEnabled) {
      dispatch(setTheme("dark"));
    } else dispatch(setTheme("light"));
  }, []);

  useEffect(() => {
    if (isDarkModeEnabled) {
      dispatch(setTheme("dark"));
    } else dispatch(setTheme("light"));
  }, [isDarkModeEnabled]);

  return (
    <Box className="aboutAlberto">
      <Box className="aboutAlberto_container">
        <AboutTitle />
        <LinkedinProfile />
        <BackNavButton />
        {isTablet && <FloatingScrollButton />}
        <ProfileCard />
      </Box>
    </Box>
  );
};

export default AboutAlberto;
