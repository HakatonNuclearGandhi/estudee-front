import { FC } from "react";
import { Box, Chip, Typography } from "@mui/material";

import { wrapper } from "./Task.styles";

export interface TaskProps {
  subject: string;
  task: string;
  deadline?: string;
  mark?: string;
  status: string;
}

const Task: FC<TaskProps> = ({ subject, task, deadline, mark, status }) => (
  <Box sx={wrapper}>
    <Chip label={subject} />
    <Typography variant="body1">{task}</Typography>
    <Typography variant="body1">{deadline}</Typography>
    <Typography variant="body1">{mark}</Typography>
    <Chip label={status} color="primary" />
  </Box>
);
export default Task;
