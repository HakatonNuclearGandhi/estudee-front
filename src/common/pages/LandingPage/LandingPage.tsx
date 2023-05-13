import { Box, Typography } from "@mui/material";

import HyperLink from "@/common/components/hyperlink";
import NavBar from "@/common/pages/LandingPage/common/NavBar";

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
        <Typography variant="h1" color="blue">
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
          <HyperLink source="./" text="Регестрація" />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default LandingPage;
