import { makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    "&:hover #serviceDetailTitle": {
      backgroundPosition: "-100% 100%",
    },
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.01)",
      "& #overlay": {
        opacity: 1,
      },
    },
    flexBasis: "24%",
    transition: "0.25s",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  image: {
    flexBasis: "82%",
    width: "100%",
  },
  title: {
    backgroundImage: `linear-gradient(90deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[900]} 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 100%)`,
    backgroundSize: "200%",
    transition: `background-position .5s ${theme.transitions.easing.easeInOut}`,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
  },
  overlay: {
    backgroundColor: fade(theme.palette.common.black, 0.3),
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: `0.25s ${theme.transitions.easing.easeInOut}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      color: "white",
    },
  },
}));
export default useStyles;
