import { Box, Typography, useMediaQuery } from "@mui/material";
import { getTranslatedLabel } from "../../../../common/labels/utils";
import vars from "../../../../styles/variables.scss";
import CGIcon from "../../../../assets/coingecko.svg";
import { CodeProejects } from "../../Code.models";

export interface CodeTitleProps {
  tabSelected: CodeProejects;
}
const CodeTitle = ({ tabSelected }: CodeTitleProps) => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  return (
    <Box
      component="div"
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
      {tabSelected === CodeProejects.BUBBLE_CHART && isTablet && (
        <Box
          component="div"
          sx={{
            position: "absolute",
            left: "16px",
            img: {
              width: "120px",
            },
            a: {
              display: "flex",
              gap: "8px",
              color: isDarkModeEnabled ? 'white' : 'black'
            },
          }}
        >
          <a href="https://www.coingecko.com/">
            <p>Powered by</p>
            <img src={CGIcon} alt="cg-logo" />
          </a>
        </Box>
      )}
    </Box>
  );
};

export default CodeTitle;
