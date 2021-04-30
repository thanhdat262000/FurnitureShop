import React from "react";
import CustomModal from "../../components/Modal/CustomModal";
import useStyles from "./styles";
import Intro from "../../shared/images/intro.png";

function IntroModal(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{ backgroundImage: "url(" + Intro + ")" }}
        >
          <div></div>
        </div>
        <CustomModal button="Read more" />
      </div>
    </div>
  );
}

export default IntroModal;
