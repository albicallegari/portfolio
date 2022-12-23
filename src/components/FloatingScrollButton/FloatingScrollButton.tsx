import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import vars from "../../styles/variables.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box } from "@mui/material";

export interface FloatingScrollButtonProps {
  goToSection: React.MutableRefObject<HTMLDivElement | null>;
}
const FloatingScrollButton = ({ goToSection }: FloatingScrollButtonProps): JSX.Element => {
  const { theme: themeState } = useSelector(
    (state: RootState) => state.session
  );

  const scrollTo = (section: React.MutableRefObject<HTMLDivElement | null>) => {
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      aria-label="scroll"
      onClick={() => scrollTo(goToSection)}
      sx={{
        position: "fixed",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        bottom: "45px",
        left: "calc(50% - 25px)",
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
        sx={{ marginTop: "15px" }}
        color={
          themeState === "dark" ? vars["color-white"] : vars["color-black"]
        }
      />
    </Box>
  );
};

export default FloatingScrollButton;
