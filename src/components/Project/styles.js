import { fade, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    "&:hover #project-overlay": {
      height: "100%",
      opacity: 1,
    },
    transition: "0.25s",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundPosition: "center",
  },
  overlay: {
    width: "100%",
    height: 0,
    backgroundColor: fade(theme.palette.common.black, 0.2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "0.25s",
  },
  projectType: {
    color: theme.palette.grey[300],
    ...theme.typography.overline,
    letterSpacing: "0.25rem",
  },
  projectName: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
export default useStyles;
