import vars from "../../../../styles/variables.scss";
import { Box, useMediaQuery } from "@mui/material";
import bbg from "../../../../assets/bg-b-bs.png";
import wbg from "../../../../assets/bg-w-bs.png";
import "./BSTitle.scss";

const BSTitle = () => {
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <Box
      className="bsTitle"
      component="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 1,
        marginTop: isTablet ? "16px" : "8px",
      }}
    >
      <img
        width="340px"
        className="bsTitle_img"
        src={isDarkModeEnabled ? bbg : wbg}
        alt="bloodsucker-logo"
      />
    </Box>
  );
};

export default BSTitle;
