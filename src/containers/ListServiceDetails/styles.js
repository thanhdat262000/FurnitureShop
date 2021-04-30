import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    padding: "2rem 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    maxWidth: "1260px",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
}));
export default useStyles;
