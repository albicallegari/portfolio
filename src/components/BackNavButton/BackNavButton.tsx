import { BackNavButtonProps } from "./BackNavButton.models";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import vars from "../../styles/variables.scss";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const BackNavButton = ({ top, bottom, right, left }: BackNavButtonProps) => {
    const { theme: themeState } = useSelector(
    (state: RootState) => state.session
  );
  const navigate = useNavigate();

  return (
    <IconButton
      aria-label="go-back"
      name="go-back"
      onClick={() => navigate(-1)}
      sx={{ 
        position: "fixed", 
        ...(!(top || bottom) && {top: "16px"}), 
        ...(!(right || left) && {right: "16px"}), 
        ...(top && {top: top}),
        ...(bottom && {bottom: bottom}),
        ...(right && {right: right}),
        ...(left && {left: left})
    }}
    >
      <ArrowBackIcon sx={{ color: themeState === 'dark' ? vars['color-white'] : vars['color-black'] }} />
    </IconButton>
  );
};

export default BackNavButton;
