import calculateMillisecondsUntilNextFiveMinuteInterval from "./utils/calculateMillisecondsUntilNextFiveMinuteInterval";
import getTextualizedTime from "./utils/getTextualizedTime";
import { useEffect, useState } from "react";
import "./WordClock.scss";
import { Box } from "@mui/material";

const WordClock = () => {
  const [textualizedTime, setTextualizedTime] = useState(getTextualizedTime());

  useEffect(() => {
    setTextualizedTime(getTextualizedTime());

    const updateTextualizedTimeTimeoutID = setTimeout(
      updateTextualizedTime,
      calculateMillisecondsUntilNextFiveMinuteInterval()
    );
    return () => {
      clearInterval(updateTextualizedTimeTimeoutID);
    };
  }, []);

  const getRow = (active: boolean, value: string) => {
    return <div className={`col-sm ${active ? "active" : ""}`}>{value}</div>;
  };

  const getPreviousFiveMinuteIntervalRow = (minutes: string) => {
    const active =
      textualizedTime?.minutes === minutes.toLowerCase() ||
      (textualizedTime.minutes === "twenty five" &&
        (minutes.toLowerCase() === "twenty" ||
          minutes.toLowerCase() === "five"));
    return getRow(active, minutes);
  };

  const getVerbRow = (verb: string) => {
    const { minutes } = textualizedTime;
    return getRow(
      !!minutes && textualizedTime.verb === verb.toLowerCase(),
      verb
    );
  };

  const getHourRow = (hour: string) => {
    return getRow(textualizedTime.hour === hour.toLowerCase(), hour);
  };

  const updateTextualizedTime = () => {
    setTextualizedTime(getTextualizedTime());
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="clock container">
        <div className="row">
          <div className="col-sm active">It</div>
          <div className="col-sm active">Is</div>
          {getPreviousFiveMinuteIntervalRow("Half")}
          {getPreviousFiveMinuteIntervalRow("Ten")}
        </div>
        <div className="row">
          {getPreviousFiveMinuteIntervalRow("Quarter")}
          {getPreviousFiveMinuteIntervalRow("Twenty")}
        </div>
        <div className="row">
          {getPreviousFiveMinuteIntervalRow("Five")}
          <div
            className={`col-sm ${
              textualizedTime.minutes &&
              textualizedTime.minutes !== "quarter" &&
              textualizedTime.minutes !== "half"
                ? "active"
                : ""
            }`}
          >
            Minutes
          </div>
          {getVerbRow("To")}
        </div>
        <div className="row">
          {getVerbRow("Past")}
          {getHourRow("One")}
          {getHourRow("Two")}
        </div>
        <div className="row">
          {getHourRow("Three")}
          {getHourRow("Four")}
          {getHourRow("Five")}
        </div>
        <div className="row">
          {getHourRow("Six")}
          {getHourRow("Seven")}
          {getHourRow("Eight")}
        </div>
        <div className="row">
          {getHourRow("Nine")}
          {getHourRow("Ten")}
          {getHourRow("Eleven")}
        </div>
        <div className="row">
          {getHourRow("Twelve")}
          <div className="col-sm active">O&apos;Clock</div>
        </div>
      </div>
    </Box>
  );
};

export default WordClock;
