import {
  getTechBoxStyle,
  getTechTitleStyle,
  technologyStack,
} from "./TechCorner.utils";
import { getTranslatedLabel } from "../../../../common/labels/utils";
import { Box, Typography } from "@mui/material";
import { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import "./TechCorner.scss";

const TechCorner = () => {
  const isDarkTheme = useSelector(
    (state: RootState) => state.session.theme === "dark"
  );
  return (
    <Box
      component="div"
      className="techCorner"
      id="tech-corner"
      sx={{ width: "100%", height: "fit-content" }}
    >
      <Typography variant="h5" sx={getTechTitleStyle(isDarkTheme)}>
        {getTranslatedLabel("aboutAlberto.techCorner.title")}
      </Typography>
      <Box component="div" className="techCorner_grid">
        {technologyStack.map((tech, i) => (
          <Box component="div" key={i} sx={getTechBoxStyle()}>
            <img
              className="techCorner_grid_techIcon"
              onClick={() => window.open(tech.techUrl)}
              src={tech.techIcon}
              alt={tech.techName}
            />
            <Typography variant="subtitle1">{tech.techName}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TechCorner;
