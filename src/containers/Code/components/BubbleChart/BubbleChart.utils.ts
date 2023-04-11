import { SxProps, Theme } from "@mui/material";
import vars from "../../../../styles/variables.scss";

export const getCoinDialogStyles = (isDarkTheme: boolean): SxProps<Theme> => {
  return {
    ".MuiPaper-root.MuiDialog-paper": {
      backgroundColor: isDarkTheme
        ? vars["color-grey-hover"]
        : vars["color-white"],
      backdropFilter: "blur(15px)",
    },
  };
};
export const getDialogTitleStyles = (isDarkTheme: boolean): SxProps<Theme> => {
  return {
    color: isDarkTheme ? vars['color-white'] : vars['color-black'],
    fontWeight: '700',
    textAlign: 'center'
  };
};
export const getDialogTextStyles = (isDarkTheme: boolean): SxProps<Theme> => {
  return {
    color: isDarkTheme ? vars['color-white'] : vars['color-black'],
    textAlign: 'center'
  };
};


