import { FC } from "react";
import { Button as ButtonMUI, Typography } from "@mui/material";

import { button } from "./Button.styles";

export interface ButtonProps {
  text: string;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "large";
  isDisabled?: boolean;
  link?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  variant = "contained",
  size = "large",
  isDisabled = false,
  link,
  onClick,
}) => (
  <ButtonMUI
    disableRipple
    disabled={isDisabled}
    variant={variant}
    href={link}
    onClick={onClick}
    sx={button(size, variant)}
  >
    <Typography variant="body2Medium">{text}</Typography>
  </ButtonMUI>
);

export default Button;
