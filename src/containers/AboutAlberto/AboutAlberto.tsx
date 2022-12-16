/* eslint-disable react-hooks/exhaustive-deps */
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { setTheme } from "../../store/sessionSlice/sessionSlice";
import { getTranslatedLabel } from "../../common/labels/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import vars from "../../styles/variables.scss";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useEffect } from "react";
import "./AboutAlberto.scss";

const AboutAlberto = () => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const { theme: themeState } = useSelector(
    (state: RootState) => state.session
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <Typography
          variant="h1"
          sx={{ textAlign: "center", fontSize: "2rem", fontWeight: "500" }}
        >
          {getTranslatedLabel("aboutAlberto.whosMe")}
        </Typography>
        <IconButton
          aria-label="go-back"
          name="go-back"
          onClick={() => navigate(-1)}
          sx={{ position: "absolute", top: "16px", right: "16px" }}
        >
          <ArrowBackIcon sx={{ color: "white" }} />
        </IconButton>
        <Box
          aria-label="scroll"
          sx={{
            position: "absolute",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            bottom: "56px",
            left: "calc(50% - 28px)",
            border: `1px solid ${
              themeState === "dark" ? vars["color-white"] : vars["color-black"]
            }`,
          }}
        >
          <KeyboardArrowDownIcon
            sx={{ marginTop: "17px" }}
            color={
              themeState === "dark" ? vars["color-white"] : vars["color-black"]
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutAlberto;
