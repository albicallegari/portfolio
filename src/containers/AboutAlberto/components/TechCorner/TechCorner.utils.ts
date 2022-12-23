import { TechnologyStack } from "./TechCorner.models";
import reactIcon from "../../../../assets/tech/react.png";
import scssIcon from "../../../../assets/tech/sass.png";
import reduxIcon from "../../../../assets/tech/redux.png";
import typescriptIcon from "../../../../assets/tech/typescript.png";
import vars from "../../../../styles/variables.scss";
import { SxProps, Theme } from "@mui/material";

export const technologyStack: TechnologyStack[] = [
  {
    techName: "React.js",
    techIcon: reactIcon,
    techUrl: "https://reactjs.org/",
  },
  {
    techName: "Redux",
    techIcon: reduxIcon,
    techUrl: "https://redux-toolkit.js.org/",
  },
  {
    techName: "Typescript",
    techIcon: typescriptIcon,
    techUrl: "https://www.typescriptlang.org/",
  },
  { techName: "Sass", techIcon: scssIcon, techUrl: "https://sass-lang.com/" },
];

export const getTechTitleStyle = (isDarkTheme: boolean): SxProps<Theme> => {
  return {
    textAlign: "center",
    fontFamily: "Nunito, sans-serif",
    padding: "5px 8px",
    borderTop: `1px solid ${
      isDarkTheme ? vars["color-white"] : vars["color-black"]
    }`,
    borderLeft: `1px solid ${
      isDarkTheme ? vars["color-white"] : vars["color-black"]
    }`,
  };
};
export const getTechBoxStyle = (): SxProps<Theme> => {
  return {
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
  };
};
