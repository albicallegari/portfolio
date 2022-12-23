import useWindowDimensions from "../../../../hooks/useWindowDimensions/useWindowDimensions";
import vars from "../../../../styles/variables.scss";
import { Box, useMediaQuery } from "@mui/material";
import "./Watches.scss";
import { useEffect, useState } from "react";

const Watches = () => {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  const [ampm, setAmpm] = useState<string>();

  const percentage = (partialValue: number, totalValue: number) => {
    return (partialValue * totalValue) / 100;
  };

  const refreshClock = () => {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    setHours(h);
    setMinutes(m);
    setSeconds(s)
    if (h >= 12) {
      setAmpm('PM')
    } else setAmpm('AM'); 
  }

  useEffect(() => {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    setHours(h);
    setMinutes(m);
    setSeconds(s);
    if (h > 12) {
      setHours(h - 12);
    } else setHours(h)
;    if (h >= 12) {
      setAmpm('PM')
    } else setAmpm('AM'); 
    const timerId = setInterval(refreshClock, 1000);
    return  () => {
      clearInterval(timerId);
    }
  }, []);

  return (
    <Box
      className="watches"
      sx={{
        width: isTablet
          ? percentage(85, windowWidth as number)
          : percentage(84, windowWidth as number),
        height: isTablet
          ? percentage(85, windowHeight as number)
          : percentage(65, windowHeight as number),
        boxSizing: "border-box",
        display: "flex",
        flexDirection: isTablet ? "row" : "column",
        gap: "40px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="watches_circle">
        <div id="hour">{hours}</div>
      </div>
      <div className="watches_circle">
        <div id="minutes">{minutes}</div>
      </div>
      <div className="watches_circle">
        <div id="seconds">{seconds}</div>
      </div>
      <div className="ap">
        <div className="ampm">{ampm}</div>
      </div>
    </Box>
  );
};

export default Watches;
