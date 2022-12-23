import { getTranslatedLabel } from "../../../../common/labels/utils";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import vars from "../../../../styles/variables.scss";
import { RootState } from "../../../../store";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const LinkedinProfile = () => {
  const { theme: themeState } = useSelector(
    (state: RootState) => state.session
  );
  const handleLinkedinProfile = () => {
    window.open(getTranslatedLabel("aboutAlberto.linkedin"));
  };
  return (
    <IconButton
      aria-label="linkedin-profile"
      name="linkedin-profile"
      onClick={handleLinkedinProfile}
      sx={{
        position: "fixed",
        top: "16px",
        left: "16px",
      }}
    >
      <LinkedInIcon
        sx={{
          color:
            themeState === "dark" ? vars["color-white"] : vars["color-black"],
        }}
      />
    </IconButton>
  );
};

export default LinkedinProfile;
