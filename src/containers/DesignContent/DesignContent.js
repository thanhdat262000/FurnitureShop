import { Typography } from "@material-ui/core";
import React from "react";
import CategoryThumbnail from "../../components/CategoryThumbnail/CategoryThumbnail";
import useStyles from "./styles";

function DesignContent(props) {
  const classes = useStyles();
  const listThumbnails = [
    { title: "Nội thất chung cư", img: "/img/noithat1.jpg" },
    { title: "Nội thất khách sạn", img: "/img/noithat2.jpg" },
    { title: "Nội thất nhà phố", img: "/img/noithat3.jpg" },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.intro}>
          <Typography variant="h4" className={classes.introTitle}>
            Bạn đang quan tâm đến?
          </Typography>
        </div>
        <div className={classes.thumbnailContainer}>
          {listThumbnails.map((thumbnail, index) => (
            <CategoryThumbnail
              title={thumbnail.title}
              img={thumbnail.img}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesignContent;
