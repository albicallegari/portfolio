import profileImg from "../../../../assets/me.webp";
import downloadImg from "../../../../assets/ico/download.svg";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "./ProfileCard.scss";
import generateClassName from "../../../../utils/generateClassName";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { getTranslatedLabel } from "../../../../common/labels/utils";
import PlaceIcon from "@mui/icons-material/Place";
import vars from "../../../../styles/variables.scss";
import FloatingScrollButton from "../../../../components/FloatingScrollButton/FloatingScrollButton";
import { useRef } from "react";
import useOnScreen from "../../../../hooks/useOnScreen/useOnScreen";
import { ProfileCardProps, TextElement } from "./ProfileCard.models";

const ProfileCard = ({ goToSection }: ProfileCardProps): JSX.Element => {
  const cardRef = useRef(null);
  const isVisible = useOnScreen(cardRef);
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const isDarkTheme = useSelector(
    (state: RootState) => state.session.theme === "dark"
  );

  const TextElement = ({
    children,
    fontSize,
    fontWeight,
  }: TextElement): JSX.Element => {
    return (
      <Typography
        sx={{
          fontFamily: "Nunito, sans-serif",
          textAlign: "center",
          fontSize: fontSize,
          fontWeight: fontWeight || 400,
        }}
      >
        {children}
      </Typography>
    );
  };

  return (
    <Box
      className="profileCard"
      id="profile-card"
      sx={{ width: "100%", height: "100vh" }}
      component="div"
    >
      <Box
        ref={cardRef}
        className="profileCard_card"
        component="div"
        sx={{
          display: "flex",
          position: "absolute",
          top: isTablet ? "calc(50% - 140px)" : "calc(50% - 275px)",
          left: isTablet ? "calc(50% - 275px)" : "calc(50% - 125px)",
          borderRadius: "5px",
          flexDirection: isTablet ? "row" : "column",
        }}
      >
        <img className="profileCard_card_img" src={profileImg} alt="me" />
        <div
          className={generateClassName({
            profileCard_card_info: true,
            profileCard_card_info_darkTheme: isDarkTheme,
          })}
        >
          <TextElement fontSize="1.5rem" fontWeight={700}>
            {getTranslatedLabel("aboutAlberto.profileCard.fullName")}
          </TextElement>
          <TextElement fontSize=".8rem">
            {getTranslatedLabel("aboutAlberto.profileCard.bDay")}
          </TextElement>
          <Box sx={{ display: "flex", alignItems: "center" }} component="div">
            <PlaceIcon
              sx={{
                width: "18px",
                height: "18px",
                color: isDarkTheme ? vars["color-black"] : vars["color-white"],
              }}
            />
            <TextElement fontSize="1rem" fontWeight={700}>
              {getTranslatedLabel("aboutAlberto.profileCard.nationality")}
            </TextElement>
          </Box>
          <TextElement fontSize="1rem">
            {getTranslatedLabel("aboutAlberto.profileCard.role")}
          </TextElement>
          <TextElement fontSize=".8rem">
            {getTranslatedLabel("aboutAlberto.profileCard.secondRole")}
          </TextElement>
          <a
            href="/pdf/callegari_alberto.pdf"
            download="Alberto-Callegari-CV.pdf"
            className={generateClassName({
              profileCard_card_info_dowloadLink: true,
            })}
          >
            <span>Download the CV</span> <img src={downloadImg} alt="" />
          </a>
        </div>
      </Box>
      {isTablet && isVisible && (
        <FloatingScrollButton goToSection={goToSection} />
      )}
    </Box>
  );
};

export default ProfileCard;
