import { Box, Typography, useMediaQuery } from "@mui/material";
import { getTranslatedLabel } from "../../../../common/labels/utils";
import vars from "../../../../styles/variables.scss";

const CodeTitle = () => {
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isTablet ? "row" : "column",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "500",
          fontFamily: "Nunito, sans-serif",
        }}
      >
        {getTranslatedLabel("aboutCode.title")}
      </Typography>
      <Typography sx={{ fontSize: "2rem" }} fontFamily={"fira code, monospace"}>
        {getTranslatedLabel("aboutCode.code")}
      </Typography>
    </Box>
  );
};

export default CodeTitle;
