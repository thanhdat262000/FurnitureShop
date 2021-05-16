import { fade, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "calc(50% + 15px )",
    maxWidth: "250px",
    paddingLeft: "1.5rem",
    "&:hover #liner": {
      width: "calc(100% + 0.5rem)",
    },
    "&:hover p, svg": {
      color: fade(theme.palette.common.white, 0.8),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "100%",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 0,
      transition: `0.2s ${theme.transitions.easing.easeOut}`,
      "&  #liner": {
        display: "none",
      },
    },
  },
  link: {
    width: "100%",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
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
  titleContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "35px",
    [theme.breakpoints.down("sm")]: { margin: 0 },
  },
  expandIcon: {
    color: "white",
  },
  menu: {
    position: "absolute",
    top: "100%",
    zIndex: "100",
    backgroundColor: "#222222",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      position: "relative",
      width: "100%",
      backgroundColor: "transperant",
      boxShadow: "none",
    },
  },
  menuItem: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    marginRight: "1rem",
  },
  menuEnter: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  menuEnterActive: {
    opacity: 1,
    transform: "translate(0)",
    transition: "opacity 300ms, transform 300ms",
  },
  menuExit: {
    opacity: "1",
  },
  menuExitActive: {
    opacity: 0,
    transition: "opacity 300ms, transform 300ms",
  },
}));
export default useStyles;
