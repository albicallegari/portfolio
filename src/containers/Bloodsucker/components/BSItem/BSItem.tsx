/* eslint-disable react-hooks/exhaustive-deps */
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { getTranslatedLabel } from "../../../../common/labels/utils";
import isNullOrEmpty from "../../../../utils/isNullOrEmpty";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ItemColor } from "../../Bloodsucker.models";
// import vars from "../../../../styles/variables.scss";
import { BSItemProps } from "./BSItem.models";
import "./BSItem.scss";

const BSItem = ({ item }: BSItemProps): JSX.Element => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const [currentColorIndex, setCurrentColorIndex] = useState<number>();
  const [currentColor, setCurrentColor] = useState<ItemColor>();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState<string>();

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

  useEffect(() => {
    if (!isNullOrEmpty(currentColor)) {
      setCurrentImg(currentColor?.imgs[0]);
      setCurrentImgIndex(0);
    }
  }, [currentColor]);

  useEffect(() => {
    if (!isNullOrEmpty(currentImgIndex)) {
      setCurrentImg(currentColor?.imgs[currentImgIndex]);
    }
  }, [currentImgIndex]);

  const handleNext = () => {
    setCurrentImgIndex(currentImgIndex + 1);
  };
  const handlePrev = () => {
    setCurrentImgIndex(currentImgIndex - 1);
  };

  return (
    <div className="bsItem">
      <img src={currentImg} alt={item.name} />
      {currentColor && currentColor?.imgs.length > 1 && currentImgIndex > 0 && (
        <ArrowBackIosNewIcon
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "35%",
            left: "2%",
            color: "black",
            cursor: "pointer",
          }}
        />
      )}
      {currentColor &&
        currentColor?.imgs.length > 1 &&
        currentImgIndex !== currentColor?.imgs.length - 1 && (
          <ArrowForwardIosIcon
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "35%",
              left: "90%",
              color: "black",
              cursor: "pointer",
            }}
          />
        )}
      <div className="bsItem_infoWrap">
        <div className="bsItem_infoWrap_row">
          <p aria-label={item.name} className="bsItem_infoWrap_row_label">
            {item.name}
          </p>
        </div>
        <div className="bsItem_infoWrap_row">
          <p>
            {`${getTranslatedLabel(
              "bloodsucker.item.availableSizes"
            )} ${item.sizes?.map((s) => s)}`}
          </p>
        </div>
        <div className="verticalWrap">
          <div className="bsItem_infoWrap_row">
            <p>{getTranslatedLabel("bloodsucker.item.color")}</p>
            {item.colors?.map((c, index) => (
              <Box
                component="div"
                key={index}
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: c.cCode,
                  cursor: "pointer",
                  border: isDarkModeEnabled
                    ? "1px solid white"
                    : "1px solid black",
                }}
                onClick={() => setCurrentColorIndex(index)}
              />
            ))}
          </div>
          <div className="bsItem_infoWrap_row">
            <p>{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSItem;
