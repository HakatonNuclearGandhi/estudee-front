import { Box } from "@mui/material";
import Image from "next/image";

import Button from "@/common/components/button";
import HyperLink from "@/common/components/hyperlink";

import TextLogo from "../../../../../../public/logos/text_logo.svg";

import { linkWrapper, wrapper } from "./NavBar.styles";

const NavBar = () => (
  <Box sx={wrapper}>
    <Image src={TextLogo} alt={"Text Logo"} />
    <Box sx={linkWrapper}>
      <HyperLink source="./1" text="Вхід" />
      <Button link="./1" text="Реєстрація" size="small" />
    </Box>
  </Box>
);

export default NavBar;
