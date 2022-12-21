import profileImg from "../../../../assets/me.jpg";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "./ProfileCard.scss";
import generateClassName from "../../../../utils/generateClassName";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { getTranslatedLabel } from "../../../../common/labels/utils";
import PlaceIcon from "@mui/icons-material/Place";
import vars from "../../../../styles/variables.scss";

const ProfileCard = () => {
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const isDarkTheme = useSelector(
    (state: RootState) => state.session.theme === "dark"
  );
  return (
    <Box
      className="profileCard"
      id="profile-card"
      sx={{ width: "100%", height: "100%" }}
    >
      <Box
        className="profileCard_card"
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
          <Typography
            sx={{
              fontFamily: "Nunito, sans-serif",
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            {getTranslatedLabel("aboutAlberto.profileCard.name")}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nunito, sans-serif",
              textAlign: "center",
              fontSize: ".8rem",
            }}
          >
            {getTranslatedLabel("aboutAlberto.profileCard.bDay")}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PlaceIcon
              sx={{
                width: "18px",
                height: "18px",
                color: isDarkTheme ? vars["color-black"] : vars["color-white"],
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito, sans-serif",
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              {getTranslatedLabel("aboutAlberto.profileCard.nationality")}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Nunito, sans-serif",
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            {getTranslatedLabel("aboutAlberto.profileCard.role")}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nunito, sans-serif",
              textAlign: "center",
              fontSize: ".8rem",
            }}
          >
            {getTranslatedLabel("aboutAlberto.profileCard.secondRole")}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default ProfileCard;
