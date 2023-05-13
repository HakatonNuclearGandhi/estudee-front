import { Box } from "@mui/material";
import Image from "next/image";

import HyperLink from "@/common/components/hyperlink";

import TextLogo from "../../../../../../public/logos/text_logo.svg";

import { linkWrapper, wrapper } from "./NavBar.styles";

const NavBar = () => (
  <Box sx={wrapper}>
    <Image src={TextLogo} alt={"Text Logo"} />
    <Box sx={linkWrapper}>
      <HyperLink source="./" text="Вхід" />
      <HyperLink source="./" text="Регестрація" />
    </Box>
  </Box>
);

export default NavBar;
