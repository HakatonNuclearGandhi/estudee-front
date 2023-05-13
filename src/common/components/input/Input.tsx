import { FC } from "react";
import { TextField } from "@mui/material";

import { input } from "./Input.styles";

export interface InputProps {
  label: string;
  size?: "medium" | "large";
  variant?: "standard" | "outlined";
  isDisabled?: boolean;
  isRequired?: boolean;
  type?: "password" | "email" | "text";
}
const Input: FC<InputProps> = ({
  label,
  size = "large",
  variant = "outlined",
  isDisabled = false,
  isRequired = false,
  type = "text",
}) => (
  <TextField
    label={label}
    variant={variant}
    disabled={isDisabled}
    required={isRequired}
    type={type}
    sx={input(size)}
  />
);
export default Input;
