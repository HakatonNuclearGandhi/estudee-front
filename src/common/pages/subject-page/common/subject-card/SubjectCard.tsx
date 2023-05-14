import { FC } from "react";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";

import { card, scoreBlock } from "./SubjectCard.styles";

export interface SubjectCardProps {
  name: string;
  description?: string;
  score: string;
}

const SubjectCard: FC<SubjectCardProps> = ({
  name,
  description = "Предмет для закриття",
  score,
}) => (
  <Card sx={card}>
    <CardContent>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Предмет
      </Typography>
      <Typography variant="body2Medium" component="div">
        {name}
      </Typography>
      <Typography
        variant="body2Medium"
        color="text.secondary"
        sx={scoreBlock}
        component="div"
      >
        {score}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton aria-label="delete" color="success">
        <EditOutlined />
      </IconButton>
      <IconButton aria-label="delete" color="error">
        <DeleteOutline />
      </IconButton>
    </CardActions>
  </Card>
);

export default SubjectCard;
