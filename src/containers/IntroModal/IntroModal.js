import React from "react";
import CustomModal from "../../components/Modal/CustomModal";
import useStyles from "./styles";

function IntroModal(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{ backgroundImage: "url(/img/intro.png)" }}
        >
          <div></div>
        </div>
        <CustomModal button="Read more" />
      </div>
    </div>
  );
}

export default IntroModal;
