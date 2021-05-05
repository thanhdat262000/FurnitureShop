import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "120px",
    backgroundColor: "#222222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "90%",
    display: "flex",
    maxWidth: "1260px",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLink: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  logo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));
export default useStyles;
