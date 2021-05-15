import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
function OpeningModal(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="caption" className={classes.subTitle}>
          ABOUT US
        </Typography>
        <Typography variant="h3" className={classes.title} align="center">
          Welcome to our charming studio
        </Typography>
        <div className={classes.divider}></div>
        <Typography align="center" variant="h6" className={classes.content}>
          We are proud to present our work. These projects are built using
          latest technologies and best talents. The benefits of our methods
          guarantee quality for many years to come.
        </Typography>
      </div>
    </div>
  );
}

export default OpeningModal;
