import { Box } from "@mui/material";

import { TabPanel } from "@/common/components/tabs";
import InformationBar from "@/common/layout/common/information-bar";
import useTab from "@/hooks/useTab";

import { wrapper } from "./Layout.styles";

const Layout = () => {
  const [tabValue, setTabValue] = useTab();

  return (
    <Box sx={wrapper}>
      <InformationBar tabCount={tabValue} setTabCount={setTabValue} />
      <TabPanel value={tabValue} index={0}>
        1
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        2
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        3
      </TabPanel>
    </Box>
  );
};

export default Layout;
