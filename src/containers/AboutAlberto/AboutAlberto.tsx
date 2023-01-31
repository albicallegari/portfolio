/* eslint-disable react-hooks/exhaustive-deps */
import AboutDescription from "./components/AboutDescription/AboutDescription";
import LinkedinProfile from "./components/LinkedinProfile/LinkedinProfile";
import BackNavButton from "../../components/BackNavButton/BackNavButton";
import { setTheme } from "../../store/sessionSlice/sessionSlice";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import AboutTitle from "./components/AboutTitle/AboutTitle";
import TechCorner from "./components/TechCorner/TechCorner";
import { getHeaderStyles } from "./AboutAlberto.utils";
import { Box, useMediaQuery } from "@mui/material";
import vars from "../../styles/variables.scss";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import "./AboutAlberto.scss";

const AboutAlberto = () => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const profileCardSection = useRef<HTMLDivElement | null>(null);
  const aboutDescriptionSection = useRef<HTMLDivElement | null>(null);
  const techCornerSection = useRef<HTMLDivElement | null>(null);
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
    <Box className="aboutAlberto" component="div">
      <Box className="aboutAlberto_container" component="div">
        <Box
          className="aboutAlberto_container_header"
          sx={getHeaderStyles(isTablet)}
          component="div"
        >
          <AboutTitle />
          <LinkedinProfile />
          <BackNavButton />
        </Box>
        <div ref={profileCardSection}>
          <ProfileCard goToSection={aboutDescriptionSection} />
        </div>
        <div ref={aboutDescriptionSection}>
          <AboutDescription goToSection={techCornerSection} />
        </div>
        <div ref={techCornerSection}>
          <TechCorner />
        </div>
      </Box>
    </Box>
  );
};

export default AboutAlberto;
