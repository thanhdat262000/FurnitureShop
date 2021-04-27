import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 0",
    height: "560px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    maxWidth: "1260px",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
}));
export default useStyles;
