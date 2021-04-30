import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main,
    padding: "1rem 0",
    color: "white",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    maxWidth: "1260px",
  },
  slogan: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
  },
  sloganMain: {
    "& > p": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));
export default useStyles;
