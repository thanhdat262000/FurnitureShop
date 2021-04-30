import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "1.5rem 2rem",
    backgroundColor: "inherit",
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[3],
      padding: "1.5rem 1.75rem 1.5rem 2.25rem",
    },
    transition: "0.25s 0.1s",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    flexBasis: "30%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%",
    "& svg": { fontSize: 50 },
  },
  title: {
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  titleMain: theme.typography.h6,
  titleContent: {
    display: "flex",
    justifyContent: "space-between",
    width: "85%",
  },
}));
export default useStyles;
