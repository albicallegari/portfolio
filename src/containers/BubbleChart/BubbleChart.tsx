import { getTranslatedLabel } from "../../common/labels/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import "./BubbleChart.scss";

const BubbleChart = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="bubble-chart">
      <Box className="bubble-chart_container" sx={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{getTranslatedLabel('global.bubbleChart')}</h1>
        <IconButton
          aria-label="go-back"
          name="go-back"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </div>
  );
};

export default BubbleChart;
