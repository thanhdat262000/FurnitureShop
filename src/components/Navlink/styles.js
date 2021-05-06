import { fade, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "calc(50% + 15px )",
    maxWidth: "250px",
    padding: "0 0.5rem",
    "&:hover #liner": {
      width: "calc(100% + 0.5rem)",
    },
    "&:hover p": {
      color: fade(theme.palette.common.white, 0.8),
    },
    textDecoration: " none",
  },
  liner: {
    height: "7px",
    width: "0",
    backgroundColor: theme.palette.primary.main,
    transition: "0.25s ",
  },
  title: {
    color: "white",
    transition: "0.25s ",
    marginBottom: "40px",
  },
  "keyframes liner": {
    "0%": {
      with: 0,
    },
    "100%": {
      width: "100%",
    },
  },
}));
export default useStyles;
