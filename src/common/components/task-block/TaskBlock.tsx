import {
  AccessTime,
  Assessment,
  FormatListBulleted,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

import Task from "@/common/components/task-block/task";

import { wrapper } from "./TaskBlock.styles";

const TaskBlock = () => (
  <Box sx={wrapper}>
    <Typography variant="body2Medium">Завдання</Typography>
    <Box>
      <IconButton aria-label="sort-task">
        <FormatListBulleted />
      </IconButton>
      <IconButton aria-label="deadline">
        <AccessTime />
      </IconButton>
      <IconButton aria-label="status">
        <Assessment />
      </IconButton>
    </Box>
    <Task
      status="Виконано"
      subject="Математичний аналіз"
      deadline="12.05.2023"
      task="Зробити роботу"
      mark="12/25"
    />
  </Box>
);

export default TaskBlock;
