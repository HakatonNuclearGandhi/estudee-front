import { SxProps, Theme } from "@mui/system";

export const input = (size: "medium" | "large"): SxProps<Theme> => {
  return {
    maxWidth: "100vw",
    "& .MuiFormLabel-root.Mui-focused": {
      color: "blue.400",
    },
    height: size === "medium" ? "35px" : "49px",
    width: size === "medium" ? "300px" : "390px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "4px",
      "&:hover fieldset, &.Mui-focused fieldset": {
        borderColor: "blue.400",
      },
    },
    "& .MuiInput-root:before, & .MuiInput-root:after": {
      borderBottomColor: "blue.400",
    },
  };
};
