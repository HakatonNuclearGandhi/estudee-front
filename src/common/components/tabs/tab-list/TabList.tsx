import { FC, ReactElement, SyntheticEvent } from "react";
import { Tabs as TabsMUI } from "@mui/material";

import { tabList } from "./TabList.styles";

export interface TabListProps {
  value: number;
  onChange(event: SyntheticEvent, newValue: number): void;
  children?: ReactElement[] | ReactElement;
}

const TabList: FC<TabListProps> = ({ value = 1, onChange, children }) => (
  <TabsMUI
    value={value}
    orientation="vertical"
    sx={tabList}
    scrollButtons="auto"
    onChange={onChange}
  >
    {children}
  </TabsMUI>
);
export default TabList;
