import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import vars from "../../styles/variables.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box } from "@mui/material";

const FloatingScrollButton = (): JSX.Element => {
  const { theme: themeState } = useSelector(
    (state: RootState) => state.session
  );
  return (
    <Box
      aria-label="scroll"
      sx={{
        position: "absolute",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        bottom: "56px",
        left: "calc(50% - 28px)",
        cursor: "pointer",
        textAlign: "center",
        border: `1px solid ${vars["color-white50"]}`,
        '&:hover': {
            border: `1px solid ${
                themeState === "dark" ? vars["color-white"] : vars["color-black"]
              }`,
        }
      }}
    >
      <KeyboardArrowDownIcon
        sx={{ marginTop: "17px" }}
        color={
          themeState === "dark" ? vars["color-white"] : vars["color-black"]
        }
      />
    </Box>
  );
};

export default FloatingScrollButton;
