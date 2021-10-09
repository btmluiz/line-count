import { styled, TextField, TextFieldProps } from "@mui/material";

export const Root = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1, 0, 0, 0),
}));

export const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  padding: theme.spacing(1, 0.5),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const InputWrapper = styled("div")(({ theme }) => ({
  width: "50%",
  height: "100%",
  padding: theme.spacing(0, 0.5),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: theme.spacing(0.5, 0.5),
  },
}));

export const InputField = styled(TextField)<TextFieldProps>(() => ({
  height: "100%",
  "& .MuiInputBase-root, & textarea": {
    height: "100% !important",
    overflow: "auto !important",
  },
}));
