import { FC, SyntheticEvent } from "react";
import {
  BriefcaseIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
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
        <Tab text="Дошка" icon={<ClipboardDocumentCheckIcon />} value={1} />
        <Tab text="Предмети" icon={<BriefcaseIcon />} value={2} />
        <Tab text="Завдання" icon={<ClipboardDocumentCheckIcon />} value={3} />
      </TabList>
    </Box>
    <Box sx={buttonContainer}>
      <Button text="Logout" size="small" variant={"outlined"} />
    </Box>
  </Box>
);

export default InformationBar;
