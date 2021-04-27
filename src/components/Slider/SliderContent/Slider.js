import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "../../../shared/images/slider_1.jpg";
import Slider2 from "../../../shared/images/slider_2.jpg";
import Slider3 from "../../../shared/images/slider_3.jpg";
import CustomNextButton from "../CustomNextButton/CustomNextButton";
import useStyles from "./styles";
function Slider(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Carousel
        dynamicHeight={true}
        showStatus={true}
        showThumbs={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        transitionTime={1000}
        preventMovementUntilSwipeScrollTolerance={true}
        renderArrowPrev={(onClickHandler, hasNext, label) => (
          <CustomNextButton
            onClick={onClickHandler}
            title={label}
            prev={true}
          />
        )}
        renderArrowNext={(onClickHandler, hasPrev, label) => (
          <CustomNextButton onClick={onClickHandler} title={label} />
        )}
      >
        <div>
          <img src={Slider1} alt="slider1" />
        </div>
        <div>
          <img src={Slider2} alt="slider1" />
        </div>
        <div>
          <img src={Slider3} alt="slider1" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
