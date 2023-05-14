const ColorMap: Record<string, string> = {
  good: "success.light",
  average: "warning.light",
  bad: "error.light",
};

const colorInfo = (value: number) => {
  if (value > 70) {
    return ColorMap.good;
  }
  if (value < 40) {
    return ColorMap.bad;
  }
  if (value <= 70) {
    return ColorMap.average;
  }
};

export default colorInfo;
