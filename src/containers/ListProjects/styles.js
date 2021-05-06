import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.grey[200],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    transition: "0.25s",
    width: "95%",
    maxWidth: "1380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "4% 0",
  },
  title: {
    marginBottom: "4%",
  },
}));
export default useStyles;
