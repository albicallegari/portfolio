import { SxProps, Theme } from "@mui/material";

export const getHeaderStyles = (isTablet: boolean): SxProps<Theme> => {
  return {
    width: "100%",
    height: isTablet ? "64px" : "100px",
    position: "fixed",
    zIndex: "10",
  };
};
