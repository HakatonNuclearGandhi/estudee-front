import { Box, Container } from "@mui/material";

import TaskBlock from "@/common/components/task-block";

import { container, wrapper } from "./TaskPage.styles";

const TaskPage = () => (
  <Container sx={container}>
    <Box sx={wrapper}>
      <TaskBlock />
    </Box>
  </Container>
);

export default TaskPage;
