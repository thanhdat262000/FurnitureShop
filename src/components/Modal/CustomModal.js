import { Typography } from "@material-ui/core";
import React from "react";
import CommonButton from "../CommomButton/CommonButton";
import TopTitle from "../TopTitle/TopTitle";
import useStyles from "./styles";
function CustomModal({ topTitle, mainTitle, content, button }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TopTitle title="ABOUT US" />
        <div className={classes.mainTitle}>
          <Typography component="p" variant="h4">
            Details that matter. We make dreams reality.
          </Typography>
        </div>
        <div className={classes.mainContent}>
          <Typography component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s. When an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Typography>
        </div>
        {button && <CommonButton title="Read more" />}
      </div>
    </div>
  );
}

export default CustomModal;
