import { FC } from "react";
import { Button as ButtonMUI, Typography } from "@mui/material";

import { button } from "./Button.styles";

export interface ButtonProps {
  text: string;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "large";
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  variant = "contained",
  size = "large",
  isDisabled = false,
}) => (
  <ButtonMUI
    disableRipple
    disabled={isDisabled}
    variant={variant}
    sx={button(size, variant)}
  >
    <Typography>{text}</Typography>
  </ButtonMUI>
);

export default Button;
