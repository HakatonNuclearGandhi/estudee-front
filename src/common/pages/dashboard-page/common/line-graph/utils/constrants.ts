const ColorMap: Record<string, string> = {
  good: "success.main",
  average: "warning.main",
  bad: "error.main",
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
