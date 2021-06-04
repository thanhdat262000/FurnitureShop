import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

function CategoryContent(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title} variant="h4">
            thiết kế nội thất chung cư
          </Typography>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CategoryContent;
