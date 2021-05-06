import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: "7% 0",
    position: "relative",
    maxWidth: "1260px",
    width: "95%",
    height: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  image: {
    width: "60%",
    maxWidth: "700px",
    height: "900px",
  },
}));
export default useStyles;
