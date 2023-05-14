import { Box } from "@mui/material";

import { TabPanel } from "@/common/components/tabs";
import InformationBar from "@/common/layout/common/information-bar";
import DashboardPage from "@/common/pages/dashboard-page";
import useTab from "@/hooks/useTab";

import { wrapper } from "./Layout.styles";

const Layout = () => {
  const [tabValue, setTabValue] = useTab();

  return (
    <Box sx={wrapper}>
      <InformationBar tabCount={tabValue} setTabCount={setTabValue} />
      <Box sx={{ width: "100%" }}>
        <TabPanel value={tabValue} index={0}>
          <DashboardPage />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          2
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          3
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Layout;
