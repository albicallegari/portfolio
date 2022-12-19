/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTranslatedLabel } from "../../common/labels/utils";
import BackNavButton from "../../components/BackNavButton/BackNavButton";
import { setTheme } from "../../store/sessionSlice/sessionSlice";
import "./Code.scss";

const Code = () => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
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
    <Box className="aboutCode">
      <Box className="aboutCode_container">
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "500",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            {getTranslatedLabel("aboutCode.title")}
          </Typography>
          <Typography
            sx={{ fontSize: "2rem" }}
            fontFamily={"fira code, monospace"}
          >
            {getTranslatedLabel("aboutCode.code")}
          </Typography>
        </Box>
        <BackNavButton />
      </Box>
    </Box>
  );
};

export default Code;
