import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "../../shared/images/slider_1.jpg";
import Slider2 from "../../shared/images/slider_2.jpg";
import Slider3 from "../../shared/images/slider_3.jpg";
function Slider(props) {
  return (
    <div>
      <Carousel
        showStatus={true}
        showThumbs={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        transitionTime={1000}
      >
        <div>
          <img src={Slider1} alt="slider1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={Slider2} alt="slider1" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Slider3} alt="slider1" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
