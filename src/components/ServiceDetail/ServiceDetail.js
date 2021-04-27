import React from "react";
import { Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";
function ServiceDetail({ img, title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{ backgroundImage: "url(" + img + ")" }}
        >
          <div className={classes.overlay} id="overlay">
            <AddIcon style={{ fontSize: 50 }} />
          </div>
        </div>
        <div className={classes.title} id="serviceDetailTitle">
          <Typography variant="h6">{title}</Typography>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
