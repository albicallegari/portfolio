import { BloodsuckerItem } from "./Bloodsucker.models";
import cap11 from "../../assets/shop/caps/cap11.webp";
import cap12 from "../../assets/shop/caps/cap12.webp";
import cap13 from "../../assets/shop/caps/cap13.webp";
import cap21 from "../../assets/shop/caps/cap21.webp";
import cap22 from "../../assets/shop/caps/cap22.webp";
import cap23 from "../../assets/shop/caps/cap23.webp";
import cap31 from "../../assets/shop/caps/cap31.webp";
import cap41 from "../../assets/shop/caps/cap41.webp";
import tee11 from "../../assets/shop/tees/tee11.webp";
import tee12 from "../../assets/shop/tees/tee12.webp";
import tee13 from "../../assets/shop/tees/tee13.webp";
import tee21 from "../../assets/shop/tees/tee21.webp";
import tee22 from "../../assets/shop/tees/tee22.webp";
import tee23 from "../../assets/shop/tees/tee23.webp";

export const getItemsList = (): BloodsuckerItem[] => {
  const items: BloodsuckerItem[] = [
    {
      name: "Bloodsucker Dad Cap",
      colors: [
        { code: "BSCb00", cCode: "#202020", label: "Black", imgs: [cap11, cap12, cap13] },
        { code: "BSCk00", cCode: "#ad9673", label: "Khaki", imgs: [cap21, cap22, cap23] },
      ],
      sizes: ["One Size"],
      price: "79,90€",
    },
    {
      name: "Bloodsucker Bucket",
      colors: [
        { code: "BSBb00", cCode: "#202020", label: "Black", imgs: [cap31] },
        { code: "BSBk00", cCode: "#ad9673", label: "Khaki", imgs: [cap41] },
      ],
      sizes: ["One Size"],
      price: "79,90€",
    },
    {
      name: "Bloodsucker Tee",
      colors: [
        { code: "BSTw00", cCode: "#fff", label: "White", imgs: [tee11, tee12, tee13] },
        { code: "BSTb00", cCode: "#202020", label: "Black", imgs: [tee21, tee22, tee23] },
      ],
      sizes: ["S", "M", "L", "XL", "2XL"],
      price: "24,90€",
    },
  ];
  return items;
};
