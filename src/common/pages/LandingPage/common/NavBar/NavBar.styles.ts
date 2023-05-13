import { SxProps, Theme } from "@mui/system";

export const wrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2vh 3vw",
};

export const linkWrapper: SxProps<Theme> = {
  display: "flex",
  gap: "1rem",
};
