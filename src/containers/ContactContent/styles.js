import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "95%",
    maxWidth: "1180px",
  },
  cardContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
    },
  },
}));
export default useStyles;
