import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    "& > div": {
      width: "50px",
      marginRight: "1.5rem",
      height: "2px",
      backgroundColor: theme.palette.primary.main,
    },
    "& p": {
      color: theme.palette.primary.main,
    },
  },
}));
export default useStyles;
