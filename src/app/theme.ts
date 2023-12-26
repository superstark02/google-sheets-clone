import { ThemeOptions } from "@mui/material";

const light: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#fafbfd",
    },
    primary: {
      light: "#fafbfd",
      dark: "#2c3e50",
      main: "#2ecc71",
    },
  },
};

const dark: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#2c3e50",
    },
    primary: {
      light: "#fafbfd",
      dark: "#2c3e50",
      main: "#2ecc71",
    },
  },
};

export const themes = {
  light,
  dark,
};
