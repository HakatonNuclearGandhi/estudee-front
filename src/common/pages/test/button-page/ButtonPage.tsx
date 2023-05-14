import { Box } from "@mui/material";

import Button from "@/common/components/button";

import { wrapper } from "./ButtonPage.style";

const ButtonPage = () => (
  <Box sx={wrapper}>
    <Button text="Log In" size="small" variant="contained" />
    <Button text="Реєстрація" size="small" variant="outlined" />
    <Button text="Log In" size="small" variant="text" />

    <Button text="Реєстрація" variant="contained" />
    <Button text="Log In" variant="outlined" />
    <Button text="Реєстрація" variant="text" />
  </Box>
);

export default ButtonPage;
