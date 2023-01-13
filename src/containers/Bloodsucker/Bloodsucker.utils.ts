import { SxProps, Theme } from "@mui/material";
import { BloodsuckerItem } from "./Bloodsucker.models";
import cap11 from "../../assets/shop/caps/cap11.png";
import cap12 from "../../assets/shop/caps/cap12.png";
import cap13 from "../../assets/shop/caps/cap13.png";
import cap21 from "../../assets/shop/caps/cap21.png";
import cap22 from "../../assets/shop/caps/cap22.png";
import cap23 from "../../assets/shop/caps/cap23.png";
import cap31 from "../../assets/shop/caps/cap31.png";
import cap41 from "../../assets/shop/caps/cap41.png";

export const getHeaderStyles = (): SxProps<Theme> => {
  return {
    width: "calc(100% - 32px)",
    height: "100px",
    position: "fixed",
    zIndex: "10",
  };
};

export const getItemsList = (): BloodsuckerItem[] => {
  const items: BloodsuckerItem[] = [
    {
      name: "Bloodsucker Dad Cap",
      colors: [
        { code: "#202020", label: "Black", imgs: [cap11, cap12, cap13] },
        { code: "#ad9673", label: "Khaki", imgs: [cap21, cap22, cap23] },
      ],
      sizes: ["One Size"],
      price: "79,90€",
    },
    {
      name: "Bloodsucker Bucket",
      colors: [
        { code: "#202020", label: "Black", imgs: [cap31] },
        { code: "#ad9673", label: "Khaki", imgs: [cap41] },
      ],
      sizes: ["One Size"],
      price: "79,90€",
    },
  ];
  return items;
};
