/* eslint-disable react-hooks/exhaustive-deps */
import useWindowDimensions from "../../../../hooks/useWindowDimensions/useWindowDimensions";
import vars from "../../../../styles/variables.scss";
import { Box, useMediaQuery } from "@mui/material";
import "./Watches.scss";
import { useEffect, useState } from "react";

const Watches = () => {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const [hours, setHours] = useState<string>();
  const [minutes, setMinutes] = useState<string>();
  const [seconds, setSeconds] = useState<string>();
  const [ampm, setAmpm] = useState<string>();

  const percentage = (partialValue: number, totalValue: number) => {
    return (partialValue * totalValue) / 100;
  };

  const formatSingleNumber = (n: number): string => {
    if (n < 10) {
      return `0${n}`;
    }
    return `${n}`;
  };

  const refreshClock = () => {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    setMinutes(formatSingleNumber(m));
    setSeconds(formatSingleNumber(s));
    if (h > 12) {
      setHours(formatSingleNumber(h - 12));
    } else setHours(formatSingleNumber(h));
    if (h >= 12) {
      setAmpm("PM");
    } else setAmpm("AM");
  };

  useEffect(() => {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    setMinutes(formatSingleNumber(m));
    setSeconds(formatSingleNumber(s));
    if (h > 12) {
      setHours(formatSingleNumber(h - 12));
    } else setHours(formatSingleNumber(h));
    if (h >= 12) {
      setAmpm("PM");
    } else setAmpm("AM");
    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
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
          : percentage(75, windowHeight as number),
        boxSizing: "border-box",
        display: "flex",
        flexDirection: isTablet ? "row" : "column",
        gap: "40px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="watches_circle">
        <div
          className="dots hrs-dot"
          style={{
            transform: `rotate(${new Date().getHours() * 30}deg)`,
          }}
        ></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle
            style={{
              strokeDashoffset:
                new Date().getHours() > 12
                  ? 440 - (440 * (new Date().getHours() - 12)) / 12
                  : 440 - (440 * new Date().getHours()) / 12,
            }}
            cx="70"
            cy="70"
            r="70"
            id="hh"
          ></circle>
        </svg>
        <div id="hour">
          {hours}
          <br />
          <span>Hours</span>
        </div>
      </div>
      <div className="watches_circle">
        <div
          className="dots min-dot"
          style={{
            transform: `rotate(${new Date().getMinutes() * 6}deg)`,
          }}
        ></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle
            style={{
              strokeDashoffset: 440 - (440 * new Date().getMinutes()) / 60,
            }}
            cx="70"
            cy="70"
            r="70"
            id="mm"
          ></circle>
        </svg>
        <div id="minutes">
          {minutes}
          <br />
          <span>Minutes</span>
        </div>
      </div>
      <div className="watches_circle">
        <div
          className="dots sec-dot"
          style={{
            transform: `rotate(${new Date().getSeconds() * 6}deg)`,
          }}
        ></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle
            style={{
              strokeDashoffset: 440 - (440 * new Date().getSeconds()) / 60,
            }}
            cx="70"
            cy="70"
            r="70"
            id="ss"
          ></circle>
        </svg>
        <div id="seconds">
          {seconds}
          <br />
          <span>Seconds</span>
        </div>
      </div>
      <div className="watches_ap">
        <div className="ampm">{ampm}</div>
      </div>
    </Box>
  );
};

export default Watches;
