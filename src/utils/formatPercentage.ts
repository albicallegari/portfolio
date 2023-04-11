export const formatPercentage = (num: string) => {
  const newNum = `${num.split(".")[0]}.${num.split(".")[1].substring(0, 2)}`;
  if (newNum.startsWith("-")) {
    return newNum;
  } else {
    return `+${newNum}`;
  }
};
