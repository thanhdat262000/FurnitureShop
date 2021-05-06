import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "480px",
  },
  container: {
    margin: "4% 0",
    maxWidth: "1260px",
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
  },
}));
export default useStyles;
