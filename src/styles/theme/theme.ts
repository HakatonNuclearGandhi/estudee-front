import { createTheme } from "@mui/system";

import customPalette from "./palette";
import customTypography from "./typography";

export const theme = createTheme({
  typography: customTypography,
  palette: customPalette,
});
