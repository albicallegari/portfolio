
export const getWrapperBoxConfig = (isTablet: boolean, isDesktop: boolean) => {
  return {
    display: "flex",
    marginTop: "24px",
    flexDirection: isTablet ? "row" : "column",
    ...(!isTablet && !isDesktop && { height: 'calc(100vh - 155px)' })
  };
};
export const getTabsConfig = (themeState: string) => {
  return {
    // maxWidth: "200px",
    ".MuiTab-root": {
      color: themeState === "dark" ? "white" : "black",
      textTransform: "capitalize",
    },
    ".MuiTab-root.Mui-selected": {
      color: themeState === "dark" ? "white" : "black",
    },
  };
};
