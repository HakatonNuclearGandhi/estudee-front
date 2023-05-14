import {
  BriefcaseIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import Box from "@mui/material/Box";

import { Tab, TabList, TabPanel } from "@/common/components/tabs";
import useTab from "@/hooks/useTab";

import { wrapper } from "./TabPage.style";

const TabPage = () => {
  const [tabValue, setTabValue] = useTab();

  return (
    <Box sx={wrapper}>
      <TabList value={tabValue} onChange={setTabValue}>
        <Tab text="Дошка" icon={<ClipboardDocumentCheckIcon />} value={0} />
        <Tab text="Предмети" icon={<BriefcaseIcon />} value={1} />
        <Tab text="Завдання" icon={<ClipboardDocumentCheckIcon />} value={2} />
      </TabList>

      <TabPanel value={tabValue} index={0}>
        Account Settings
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Security Settings
      </TabPanel>
    </Box>
  );
};

export default TabPage;
