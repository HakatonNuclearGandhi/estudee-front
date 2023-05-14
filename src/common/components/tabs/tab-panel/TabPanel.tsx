import { FC, ReactNode } from "react";
import { Box } from "@mui/system";

export interface TabPanelProps {
  value: number;
  index: number;
  children: ReactNode;
}

import { wrapper } from "./TabPanel.styles";

const TabPanel: FC<TabPanelProps> = ({ value, index, children }) => (
  <Box role="tabpanel" hidden={value !== index} sx={wrapper}>
    {value === index && children}
  </Box>
);

export default TabPanel;
