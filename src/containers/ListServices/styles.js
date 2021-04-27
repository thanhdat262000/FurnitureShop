import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.grey[300],
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    maxHeight: "200px",
    minHeight: "130px",
    maxWidth: "1260px",
  },
}));
export default useStyles;
