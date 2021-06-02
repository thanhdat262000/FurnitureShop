import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    display: "flex",
    boxShadow: theme.shadows[4],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    margin: "5% 0",
  },
  formContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  topTitle: {
    color: theme.palette.primary.main,
    textTransform: "uppercase",
  },
  mainTitle: {
    marginBottom: "4%",
  },
  submitButton: {
    marginTop: "1rem",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "5px",
    outline: "none",
    border: "none",
    height: "3rem",
    width: "50%",
    transition: `0.25s ${theme.transitions.easing.easeInOut}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    color: "white",
    cursor: "pointer",
  },
}));
export default useStyles;
