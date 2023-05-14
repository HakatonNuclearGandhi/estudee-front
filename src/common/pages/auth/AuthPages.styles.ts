import { SxProps, Theme } from "@mui/system";

export const wrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px",
  flexDirection: "column",
  gap: "32px",
  width: "100vw",
  minHeight: "100vh",
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
