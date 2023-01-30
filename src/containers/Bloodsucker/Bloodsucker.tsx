import BackNavButton from "../../components/BackNavButton/BackNavButton";
import { getHeaderStyles, getItemsList } from "./Bloodsucker.utils";
import { BloodsuckerItem } from "./Bloodsucker.models";
import BSTitle from "./components/BSTitle/BSTitle";
// import vars from "../../styles/variables.scss";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./Bloodsucker.scss";
import BSItem from "./components/BSItem/BSItem";

const Bloodsucker = () => {
  // const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const [itemsList, setItemsList] = useState<BloodsuckerItem[]>([]);

  useEffect(() => {
    setItemsList(getItemsList());
  }, []);

  return (
    <div className="bloodsucker">
      <div className="bloodsucker_container">
        <Box className="bloodsucker_container_header" sx={getHeaderStyles()} component="div">
          <BSTitle />
          <BackNavButton />
        </Box>
        <div className="bloodsucker_container_wrapper">
          {itemsList?.map((item, i) => (
            <BSItem key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bloodsucker;
