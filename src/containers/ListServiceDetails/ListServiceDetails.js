import React from "react";
import ServiceDetail from "../../components/ServiceDetail/ServiceDetail";
import useStyles from "./styles";
import Design from "../../shared/images/design.png";
import Design1 from "../../shared/images/design1.png";
import Design2 from "../../shared/images/design2.png";
function ListServiceDetails(props) {
  const classes = useStyles();
  const serviceDetails = [
    { intro: true },
    { img: Design, title: "THIẾT KẾ NỘI THẤT" },
    { img: Design1, title: "THIẾT KẾ KIẾN TRÚC" },
    { img: Design2, title: "PHÂN PHỐI NỘI THẤT GỖ" },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {serviceDetails.map((serviceDetail, index) =>
          !serviceDetail.intro ? (
            <ServiceDetail
              img={serviceDetail.img}
              title={serviceDetail.title}
            />
          ) : (
            <ServiceDetail intro={serviceDetail.intro} />
          )
        )}
      </div>
    </div>
  );
}

export default ListServiceDetails;
