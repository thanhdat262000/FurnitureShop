import React from "react";
import ServiceDetail from "../../components/ServiceDetail/ServiceDetail";
import useStyles from "./styles";
function ListServiceDetails(props) {
  const classes = useStyles();
  const serviceDetails = [
    { intro: true },
    { img: "/img/design.png", title: "THIẾT KẾ NỘI THẤT" },
    { img: "/img/design1.png", title: "THIẾT KẾ KIẾN TRÚC" },
    { img: "/img/design2.png", title: "PHÂN PHỐI NỘI THẤT GỖ" },
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
