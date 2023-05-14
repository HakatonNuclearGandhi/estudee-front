import { FC, ReactNode } from "react";

export interface TabPanelProps {
  value: number;
  index: number;
  children: ReactNode;
}

const TabPanel: FC<TabPanelProps> = ({ value, index, children }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && children}
  </div>
);

export default TabPanel;
