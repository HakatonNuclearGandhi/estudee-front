import { FC, SyntheticEvent } from "react";
import {
  FormatListNumberedOutlined,
  GridView,
  WorkOutline,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import Image from "next/image";

import Button from "@/common/components/button";
import { Tab, TabList } from "@/common/components/tabs";

import TextLogo from "../../../../../public/logos/text_logo.svg";

import {
  buttonContainer,
  tabContainer,
  wrapper,
} from "./InformationBar.styles";

export interface InformationBarProps {
  tabCount: number;
  setTabCount: (
    event: SyntheticEvent<Element, Event>,
    newValue: number
  ) => void;
}

const InformationBar: FC<InformationBarProps> = ({ tabCount, setTabCount }) => (
  <Box sx={wrapper}>
    <Image src={TextLogo} alt={"Text Logo"} />
    <Box sx={tabContainer}>
      <TabList value={tabCount} onChange={setTabCount}>
        <Tab text="Дошка" icon={<GridView />} value={0} />
        <Tab text="Предмети" icon={<WorkOutline />} value={1} />
        <Tab text="Завдання" icon={<FormatListNumberedOutlined />} value={2} />
      </TabList>
      <Button text="Додати таск" size="small" variant={"text"} />
    </Box>
    <Box sx={buttonContainer}>
      <Button link="./" text="Вийти" size="small" variant={"outlined"} />
    </Box>
  </Box>
);

export default InformationBar;
