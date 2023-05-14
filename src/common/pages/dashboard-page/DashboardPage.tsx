import { Box, Container, Typography } from "@mui/material";

import LineGraph from "@/common/pages/dashboard-page/common/line-graph";

import TaskBlock from "../../components/task-block";

import { container, wrapper } from "./Dashboard.styles";

const DashboardPage = () => (
  <Container sx={container}>
    <Box sx={wrapper}>
      <TaskBlock />
    </Box>
    <Box sx={wrapper}>
      <Typography variant="body2Medium">Статистика</Typography>
      <LineGraph value={20} label="Виконано" />
      <LineGraph value={80} label="В процесі" />
      <LineGraph value={40} label="Не виконано" />
    </Box>
  </Container>
);

export default DashboardPage;
