/* eslint-disable react-hooks/exhaustive-deps */
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { getTranslatedLabel } from "../../../../common/labels/utils";
import isNullOrEmpty from "../../../../utils/isNullOrEmpty";
import { ItemColor } from "../../Bloodsucker.models";
// import vars from "../../../../styles/variables.scss";
import { BSItemProps } from "./BSItem.models";
import "./BSItem.scss";

const BSItem = ({ item }: BSItemProps): JSX.Element => {
  //   const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const [currentColorIndex, setCurrentColorIndex] = useState<number>();
  const [currentColor, setCurrentColor] = useState<ItemColor>();

  useEffect(() => {
    if (item.colors?.length) {
      setCurrentColorIndex(0);
      setCurrentColor(item.colors[0]);
    }
  }, [item]);

  useEffect(() => {
    if (!isNullOrEmpty(currentColorIndex)) {
      const cur = item?.colors[currentColorIndex];
      setCurrentColor(cur);
    }
  }, [currentColorIndex]);

  return (
    <div className="bsItem">
      <img src={currentColor?.imgs[0]} alt={item.name} />
      <div className="bsItem_infoWrap">
        <div className="bsItem_infoWrap_row">
          <p aria-label={item.name} className="bsItem_infoWrap_row_label">
            {item.name}
          </p>
        </div>
        <div className="bsItem_infoWrap_row">
          <p>{getTranslatedLabel("bloodsucker.item.price")}</p>
          <p>{item.price}</p>
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
          {item.colors?.map((c, index) => (
            <Box
              key={index}
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: c.code,
                cursor: "pointer",
                border: isDarkModeEnabled
                  ? "1px solid white"
                  : "1px solid black",
              }}
              onClick={() => setCurrentColorIndex(index)}
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
