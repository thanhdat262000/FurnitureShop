import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";

function Navlink(props) {
  const classes = useStyles();
  return (
    <a href="#" className={classes.root}>
      <Typography className={classes.title}>{props.title}</Typography>
      <div className={classes.liner} id="liner"></div>
    </a>
  );
}

export default Navlink;
