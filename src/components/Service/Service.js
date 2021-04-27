import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
function Service({ icon, title, titleContent }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.icon}>{icon}</div>
        <div className={classes.title}>
          <Typography className={classes.titleMain}>{title}</Typography>
          <div className={classes.titleContent}>
            <Typography>{titleContent}</Typography>
            <TrendingFlatIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
