import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

function CategoryThumbnail({ title, img }) {
  const classes = useStyles();
  return (
    <a href="#" className={classes.root}>
      <div className={classes.container}>
        <img className={classes.thumbnailImage} src={img} alt="thumbnail" />
        <div className={classes.divider}></div>
        <Typography variant="h6" component="p" className={classes.title}>
          {title}
        </Typography>
      </div>
    </a>
  );
}

export default CategoryThumbnail;
