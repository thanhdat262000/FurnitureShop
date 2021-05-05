import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.grey[900],
  },
  container: {
    margin: "5% 0",
    width: "80%",
    maxWidth: "1260px",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
}));
export default useStyles;
