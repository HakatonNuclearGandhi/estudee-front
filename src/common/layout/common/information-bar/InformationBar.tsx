import { FC, SyntheticEvent, useState } from "react";
import {
  FormatListNumberedOutlined,
  GridView,
  WorkOutline,
} from "@mui/icons-material";
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import Button from "@/common/components/button";
import Input from "@/common/components/input";
import { Tab, TabList } from "@/common/components/tabs";

import TextLogo from "../../../../../public/logos/text_logo.svg";

import * as styles from "./InformationBar.styles";

export interface InformationBarProps {
  tabCount: number;
  setTabCount: (
    event: SyntheticEvent<Element, Event>,
    newValue: number
  ) => void;
}

const InformationBar: FC<InformationBarProps> = ({ tabCount, setTabCount }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [subject, setSubject] = useState("");
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [maxMark, setMaxMark] = useState("");
  const [status, setStatus] = useState("");
  return (
    <Box sx={styles.wrapper}>
      <Image src={TextLogo} alt={"Text Logo"} />
      <Box sx={styles.tabContainer}>
        <TabList value={tabCount} onChange={setTabCount}>
          <Tab text="Дошка" icon={<GridView />} value={0} />
          <Tab text="Предмети" icon={<WorkOutline />} value={1} />
          <Tab
            text="Завдання"
            icon={<FormatListNumberedOutlined />}
            value={2}
          />
        </TabList>
        <Button
          onClick={handleOpen}
          text="Додати таск"
          size="small"
          variant={"text"}
        />
        <Modal open={open} onClose={handleClose} sx={styles.modal}>
          <Box sx={styles.window}>
            <Box sx={styles.textContent}>
              <Typography variant="h4Medium">Додавання таску</Typography>
              <Typography variant="body2">
                Для продовження заповність всі поля нижче
              </Typography>
            </Box>
            <Box sx={styles.inputContainer}>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                label="Назва предмету"
                type="text"
                isRequired
              />
              <Input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                label="Назва таску"
                type="text"
              />
              <Input
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                label="Дата дедлайну"
                type="text"
              />
              <Input
                value={maxMark}
                onChange={(e) => setMaxMark(e.target.value)}
                label="Максимальний бал"
                type="text"
              />
              <Input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="Статус"
                type="text"
              />
            </Box>
            <Box sx={styles.buttonContent}>
              <Button type="submit" text="Додати" variant="contained" />
            </Box>
          </Box>
        </Modal>
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button link="./" text="Вийти" size="small" variant={"outlined"} />
      </Box>
    </Box>
  );
};

export default InformationBar;
