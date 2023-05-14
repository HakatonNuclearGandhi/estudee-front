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
  gap: "20px",
};

export const buttonContainer: SxProps<Theme> = {
  marginTop: "auto",
};

export const modal: SxProps<Theme> = {
  position: "absolute" as const,
  borderRadius: "20px",
  width: "42vw",
  height: "90vh",
  backgroundColor: "background.paper",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px",
  flexDirection: "column",
  marginLeft: "30vw",
  marginTop: "5vh",
  border: "2px solid #000",
  boxShadow: 24,
};

export const textContent: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "8px",
};

export const inputContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "24px",
  margin: "32px",
};

export const buttonContent: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "16px",
};

export const smallTextContent: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
};

export const window: SxProps<Theme> = {
  width: "30vw",
};
