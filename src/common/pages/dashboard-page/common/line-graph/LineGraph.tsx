import { FC } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

import { checkValue } from "@/common/pages/dashboard-page/common/line-graph/utils";

import { graph, labelWrapper, wrapper } from "./LineGraph.styles";

export interface LineGraphProps {
  value: number;
  label: string;
}

const LineGraph: FC<LineGraphProps> = ({ label, value }) => {
  const checkedValue = checkValue(value);
  return (
    <Box sx={wrapper}>
      <Box sx={labelWrapper}>
        <Typography>{label}</Typography>
        <Typography>{checkedValue}%</Typography>
      </Box>
      <LinearProgress
        sx={graph(checkedValue)}
        variant="determinate"
        value={checkedValue}
      />
    </Box>
  );
};

export default LineGraph;
