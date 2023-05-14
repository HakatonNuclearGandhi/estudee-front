import { linearProgressClasses } from "@mui/material/LinearProgress";
import { SxProps, Theme } from "@mui/system";

import colorInfo from "@/common/pages/dashboard-page/common/line-graph/utils/constrants";

export const wrapper: SxProps<Theme> = {
  display: "grid",
  alignItems: "center",
  flexDirection: "column",
};

export const labelWrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  padding: "0 0 6px 6px",
};

export const graph = (value: number): SxProps<Theme> => ({
  height: "7px",
  borderRadius: "5px",
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: "5px",
    backgroundColor: colorInfo(value),
  },
});
