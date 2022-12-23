/* eslint-disable react-hooks/exhaustive-deps */
import AboutDescription from "./components/AboutDescription/AboutDescription";
import LinkedinProfile from "./components/LinkedinProfile/LinkedinProfile";
import BackNavButton from "../../components/BackNavButton/BackNavButton";
import { setTheme } from "../../store/sessionSlice/sessionSlice";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import AboutTitle from "./components/AboutTitle/AboutTitle";
import { Box, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import "./AboutAlberto.scss";
import TechCorner from "./components/TechCorner/TechCorner";

const AboutAlberto = () => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const dispatch = useDispatch();
  const profileCardSection = useRef<HTMLDivElement | null>(null);
  const aboutDescriptionSection = useRef<HTMLDivElement | null>(null);
  const techCornerSection = useRef<HTMLDivElement | null>(null);

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
        <div ref={profileCardSection}>
          <ProfileCard
            goToSection={aboutDescriptionSection}
          />
        </div>
        <div ref={aboutDescriptionSection}>
          <AboutDescription
            goToSection={techCornerSection}
          />
        </div>
        <div ref={techCornerSection}>
          <TechCorner />
        </div>
      </Box>
    </Box>
  );
};

export default AboutAlberto;
