import { SxProps, Theme } from "@mui/system";

import typography from "@/styles/theme/typography";

export const tab: SxProps<Theme> = {
  minWidth: "0",
  minHeight: "0",
  fontWeight: typography.body2?.fontWeight,
  fontFamily: typography.fontFamily,
  fontSize: typography.body2?.fontSize,
  textTransform: "none",
  height: "36px",
  width: "100%",
  justifyContent: "flex-start",
  svg: {
    width: "24px",
    height: "24px",
  },
};
