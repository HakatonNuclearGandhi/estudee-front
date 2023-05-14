import { FC, ReactElement } from "react";
import { Tab as TabMUI } from "@mui/material";

import { tab } from "./Tab.styles";

export interface TabProps {
  value?: number;
  text?: string;
  icon?: ReactElement;
  iconPosition?: "top" | "start" | "end" | "bottom";
  isDisabled?: boolean;
}

const Tab: FC<TabProps> = ({
  value = 1,
  text = "tab",
  icon,
  iconPosition = "start",
  isDisabled = false,
  ...rest
}) => (
  <TabMUI
    value={value}
    label={text}
    icon={icon}
    iconPosition={iconPosition}
    disabled={isDisabled}
    sx={tab}
    {...rest}
  ></TabMUI>
);

export default Tab;
