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
    },
  },
});
export default theme;
