import { SxProps, Theme } from "@mui/system";

export const wrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: "100vh",
  width: "fit-content",
  padding: "2vh 3vw 5vh 3vw",
  backgroundColor: "lightBlue.400",
};

export const tabContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  marginTop: "50px",
  gap: "10px",
};

export const buttonContainer: SxProps<Theme> = {
  marginTop: "auto",
};
