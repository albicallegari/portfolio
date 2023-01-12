const hourToText = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
};

const minutesToText = {
  5: "five",
  55: "five",
  10: "ten",
  50: "ten",
  15: "quarter",
  45: "quarter",
  20: "twenty",
  40: "twenty",
  25: "twenty five",
  30: "half",
};
export const formatHour = (date: Date) => {
  var hours = date.getHours();
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  return hours;
}

const getTextualizedTime = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const previousFiveMinutes = 5 * Math.floor(minutes / 5);
  const textualizedMinutes = minutesToText[previousFiveMinutes as keyof typeof minutesToText];
  const textualizedHour =
    previousFiveMinutes > 30
      ? hourToText[formatHour(date) + 1 as keyof typeof hourToText]
      : hourToText[formatHour(date) as keyof typeof hourToText];
  return {
    minutes: textualizedMinutes,
    hour: textualizedHour,
    verb: previousFiveMinutes > 30 ? "to" : "past",
  };
};

export default getTextualizedTime;
