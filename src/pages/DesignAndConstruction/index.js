import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import DesignContent from "../../containers/DesignContent/DesignContent";
import useStyles from "./styles";
import ListProject from "../../containers/ListProjects/ListProject";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";
import { GET_ALL_PROJECT_BY_SERVICE } from "../../redux/action";
import { projectsSelector } from "../../redux/selector";

function DesignAndConstruction(props) {
  const classes = useStyles();

  const listContents = [
    {
      type: "design",
      content: {
        introTopTitle: "design",
        introMainTitle: "Welcome to our services",
        introContent:
          "We are proud to present our work. These projects are built using latest technologies and best talents. The benefits of our methods guarantee quality for many years to come.",
        listThumbnails: [
          {
            title: "Nội thất chung cư",
            img: "/img/noithat1.jpg",
            link: "category/apartment-design",
          },
          {
            title: "Nội thất khách sạn",
            img: "/img/noithat2.jpg",
            link: "category/hotel-design",
          },
          {
            title: "Nội thất nhà phố",
            img: "/img/noithat3.jpg",
            link: "category/house-design",
          },
        ],
        listProjectsTitle: "Một số dự án thiết kế nội thất",
      },
    },
    {
      type: "construction",
      content: {
        introTopTitle: "construction",
        introMainTitle: "Welcome to our services",
        introContent:
          "We are proud to present our work. These projects are built using latest technologies and best talents. The benefits of our methods guarantee quality for many years to come.",
        listThumbnails: [
          {
            title: "Thi công chung cư",
            img: "/img/noithat1.jpg",
            link: "category/apartment-construction",
          },
          {
            title: "Thi công khách sạn",
            img: "/img/noithat2.jpg",
            link: "category/hotel-construction",
          },
          {
            title: "Thi công nhà phố",
            img: "/img/noithat3.jpg",
            link: "category/house-construction",
          },
        ],
        listProjectsTitle: "Một số dự án thi công nội thất",
      },
    },
  ];
  const location = useLocation();
  const path = location.pathname.substring(1);
  const pageContent = listContents.filter(
    (content) => content.type === path
  )[0];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_ALL_PROJECT_BY_SERVICE, payload: { service: path } });
  }, [dispatch, path]);
  const projects = useSelector(projectsSelector);
  return (
    <div className={classes.root}>
      <OpeningModal
        topTitle={pageContent.content.introTopTitle}
        mainTitle={pageContent.content.introMainTitle}
        content={pageContent.content.introContent}
      />
      <DesignContent listThumbnails={pageContent.content.listThumbnails} />
      <ListProject
        title={pageContent.content.listProjectsTitle}
        projectList={projects}
      />
    </div>
  );
}

export default DesignAndConstruction;
