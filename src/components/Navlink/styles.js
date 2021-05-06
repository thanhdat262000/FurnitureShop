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
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "100%",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 0,
      transition: `0.2s ${theme.transitions.easing.easeOut}`,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "& > div": {
        display: "none",
      },
    },
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
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 20px 10px",
    },
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
