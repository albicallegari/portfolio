/* eslint-disable react-hooks/exhaustive-deps */
import FloatingScrollButton from "../../components/FloatingScrollButton/FloatingScrollButton";
import BackNavButton from "../../components/BackNavButton/BackNavButton";
import { getTranslatedLabel } from "../../common/labels/utils";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import vars from "../../styles/variables.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import "./AboutAlberto.scss";
import { useEffect } from "react";
import { setTheme } from "../../store/sessionSlice/sessionSlice";

const AboutAlberto = () => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const { theme: themeState } = useSelector(
    (state: RootState) => state.session
  );
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
  const handleLinkedinProfile = () => {
    window.open(getTranslatedLabel("aboutAlberto.linkedin"));
  };
  return (
    <Box className="aboutAlberto">
      <Box className="aboutAlberto_container">
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Nunito, sans-serif",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          {getTranslatedLabel("aboutAlberto.title")}
        </Typography>
        <IconButton
          aria-label="go-back"
          name="go-back"
          onClick={handleLinkedinProfile}
          sx={{
            position: "absolute",
            top: "16px",
            left: "16px",
          }}
        >
          <LinkedInIcon
            sx={{
              color:
                themeState === "dark"
                  ? vars["color-white"]
                  : vars["color-black"],
            }}
          />
        </IconButton>
        <BackNavButton />
        <FloatingScrollButton />
      </Box>
    </Box>
  );
};

export default AboutAlberto;
