import { SxProps, Theme } from "@mui/system";

export const wrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: "100vh",
  width: "fit-content",
  padding: "2vh 3vw 5vh 3vw",
  borderRight: "1px solid #e0e0e0",
};

export const tabContainer: SxProps<Theme> = {
  marginTop: "50px",
};

export const buttonContainer: SxProps<Theme> = {
  marginTop: "auto",
};
