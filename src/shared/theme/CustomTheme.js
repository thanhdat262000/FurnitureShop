import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Nunito",
    h6: {
      lineHeight: 1.2,
    },
  },
  palette: {
    primary: {
      main: "#7D6741",
      dark: "#644e28",
    },
    secondary: {
      main: "#633a2d",
    },
  },
});
export default theme;
