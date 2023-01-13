import { Box, useMediaQuery } from "@mui/material";
import { getTranslatedLabel } from "../../../../common/labels/utils";
// import vars from "../../../../styles/variables.scss";
import { BSItemProps } from "./BSItem.models";
import "./BSItem.scss";

const BSItem = ({ item }: BSItemProps): JSX.Element => {
  //   const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const img = item?.imgs[0];
  return (
    <div className="bsItem">
      <img src={img} alt={item.name} />
      <div className="bsItem_infoWrap">
        <div className="bsItem_infoWrap_row">
          <p aria-label={item.name} className="bsItem_infoWrap_row_label">{item.name}</p>
        </div>
        <div className="bsItem_infoWrap_row">
          <p>
            {`${getTranslatedLabel(
              "bloodsucker.item.availableSizes"
            )} ${item.sizes?.map((s) => s)}`}
          </p>
        </div>
        <div className="bsItem_infoWrap_row">
          <p>{getTranslatedLabel("bloodsucker.item.color")}</p>
          {item.colors?.map((c, i) => (
            <Box
              key={i}
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: c.code,
                border: isDarkModeEnabled
                  ? "1px solid white"
                  : "1px solid black",
              }}
            >
              <p aria-label={c.label} />
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BSItem;
