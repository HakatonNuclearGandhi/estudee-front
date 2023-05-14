import { SxProps, Theme } from "@mui/system";

export const wrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  border: "1px solid #D8E4FF",
  borderRadius: "5px",
  padding: "20px",
};

export const container: SxProps<Theme> = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};
