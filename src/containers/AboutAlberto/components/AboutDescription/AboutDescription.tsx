import vars from "../../../../styles/variables.scss";
import { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "./AboutDescription.scss";
import { getTranslatedLabel } from "../../../../common/labels/utils";
import FloatingScrollButton from "../../../../components/FloatingScrollButton/FloatingScrollButton";
import { useRef } from "react";
import useOnScreen from "../../../../hooks/useOnScreen/useOnScreen";

export interface AboutDescriptionProps {
  goToSection: React.MutableRefObject<HTMLDivElement | null>;
}
const AboutDescription = ({ goToSection }: AboutDescriptionProps) => {
  const descRef = useRef(null);
  const isVisible = useOnScreen(descRef);
  const isDarkTheme = useSelector(
    (state: RootState) => state.session.theme === "dark"
  );
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const boxList = [
    {
      backgroundColor: "#0287b8",
      label: isTablet
        ? getTranslatedLabel("aboutAlberto.profileCard.fullName")
        : getTranslatedLabel("aboutAlberto.profileCard.name"),
    },
    {
      backgroundColor: "#CD921E",
      label: isTablet
        ? getTranslatedLabel("aboutAlberto.aboutDescription.feDev")
        : getTranslatedLabel("aboutAlberto.profileCard.secondRole"),
    },
    {
      backgroundColor: "#c10528",
      label: isTablet
        ? getTranslatedLabel("aboutAlberto.aboutDescription.swEng")
        : getTranslatedLabel("aboutAlberto.aboutDescription.swEngMobile"),
    },
  ];

  return (
    <Box
      component="div"
      className="aboutDescription"
      id="about-description"
      sx={{
        width: "100%",
        height: isTablet ? "100vh" : "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      <div className="aboutDescription_textAnimation">
        <p>{getTranslatedLabel("aboutAlberto.aboutDescription.title")}</p>
        <div className="aboutDescription_textAnimation_animation">
          {boxList.map((b, i) => (
            <Box
              component="div"
              key={i}
              ref={descRef}
              sx={{
                backgroundColor: b.backgroundColor,
                textAlign: "center",
                width: isTablet ? "fit-content" : "100%",
              }}
            >
              {b.label}
            </Box>
          ))}
        </div>
      </div>
      <Typography
        sx={{
          width: isTablet ? "60%" : "70%",
          height: "fit-content",
          fontFamily: "Nunito, sans-serif",
          //   marginTop: "20%",
          color: isDarkTheme ? vars["color-white"] : vars["color-black"],
        }}
      >
        {getTranslatedLabel("aboutAlberto.aboutDescription.aboutDesc")}
      </Typography>
      <Typography
        sx={{
          width: isTablet ? "60%" : "70%",
          height: "fit-content",
          fontFamily: "Nunito, sans-serif",
          marginTop: "16px",
          color: isDarkTheme ? vars["color-white"] : vars["color-black"],
        }}
      >
        {getTranslatedLabel("aboutAlberto.aboutDescription.aboutDesc1")}
      </Typography>
      <Typography
        sx={{
          width: isTablet ? "60%" : "70%",
          height: "fit-content",
          fontFamily: "Nunito, sans-serif",
          marginTop: "16px",
          color: isDarkTheme ? vars["color-white"] : vars["color-black"],
        }}
      >
        {getTranslatedLabel("aboutAlberto.aboutDescription.aboutDesc2")}
      </Typography>
      <Typography
        sx={{
          width: isTablet ? "60%" : "70%",
          height: "fit-content",
          fontFamily: "Nunito, sans-serif",
          marginTop: "16px",
          color: isDarkTheme ? vars["color-white"] : vars["color-black"],
        }}
      >
        {getTranslatedLabel("aboutAlberto.aboutDescription.aboutDesc3")}
      </Typography>
      <Typography
        className="aboutDescription_typing"
        sx={{
          width: isTablet ? "60%" : "70%",
          height: "fit-content",
          fontFamily: "Nunito, sans-serif",
          marginTop: "16px",
          color: isDarkTheme ? vars["color-white"] : vars["color-black"],
          ...(!isTablet ? { marginBottom: "20%" } : null),
        }}
      >
        {getTranslatedLabel("aboutAlberto.aboutDescription.aboutDesc4")}
      </Typography>
      {/* <Box
        component="div"
        sx={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <p>
          {getTranslatedLabel("aboutAlberto.aboutDescription.checkout")}
        </p>
        <a className="aboutDescription_extLink" href={getTranslatedLabel("global.nextjsUrl")}>
          {getTranslatedLabel("aboutAlberto.aboutDescription.nextjs")}
        </a>
      </Box> */}
      {isTablet && isVisible && (
        <FloatingScrollButton goToSection={goToSection} />
      )}
    </Box>
  );
};

export default AboutDescription;
