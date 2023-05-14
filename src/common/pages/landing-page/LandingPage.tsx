import { Box, Typography } from "@mui/material";

import Button from "@/common/components/button";

import NavBar from "./common/NavBar";
import {
  buttonContainer,
  mainContent,
  textContent,
  wrapper,
} from "./LandingPage.styles";

const LandingPage = () => (
  <Box sx={wrapper}>
    <NavBar />
    <Box className="landing-image" sx={mainContent}>
      <Box sx={textContent}>
        <Typography variant="h1">
          Організовуй свої завдання по дисциплінам з
        </Typography>
        <Typography variant="h1" color="blue.100">
          eStudee
        </Typography>
      </Box>
      <Box sx={textContent}>
        <Typography variant="h5">
          Знову пропустив дедлайн важливого завдання?
        </Typography>
        <Typography variant="h6">
          З викорисатанням нашого сервісу такого більше не повториться
        </Typography>
        <Box sx={buttonContainer}>
          <Button
            link="./registration"
            text="Реєстрація"
            variant="text"
            size="small"
          />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default LandingPage;
