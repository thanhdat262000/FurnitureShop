import React from "react";
import { useLocation } from "react-router";
import DesignContent from "../../containers/DesignContent/DesignContent";
import ListProject from "../../containers/ListProjects/ListProject";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";

function DesignAndConstruction(props) {
  const listContents = [
    {
      type: "design",
      content: {
        introTopTitle: "design",
        introMainTitle: "Welcome to our services",
        introContent:
          "We are proud to present our work. These projects are built using latest technologies and best talents. The benefits of our methods guarantee quality for many years to come.",
        listThumbnails: [
          { title: "Nội thất chung cư", img: "/img/noithat1.jpg" },
          { title: "Nội thất khách sạn", img: "/img/noithat2.jpg" },
          { title: "Nội thất nhà phố", img: "/img/noithat3.jpg" },
        ],
        listProjectsTitle: "Một số dự án thiết kế nội thất",
        listProjectsType: "design",
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
          { title: "Thi công chung cư", img: "/img/noithat1.jpg" },
          { title: "Thi công khách sạn", img: "/img/noithat2.jpg" },
          { title: "Thi công nhà phố", img: "/img/noithat3.jpg" },
        ],
        listProjectsTitle: "Một số dự án thi công nội thất",
        listProjectsType: "construction",
      },
    },
  ];
  const location = useLocation();
  const path = location.pathname.substring(1);
  const pageContent = listContents.filter(
    (content) => content.type === path
  )[0];
  return (
    <div>
      <OpeningModal
        topTitle={pageContent.content.introTopTitle}
        mainTitle={pageContent.content.introMainTitle}
        content={pageContent.content.introContent}
      />
      <DesignContent listThumbnails={pageContent.content.listThumbnails} />
      <ListProject
        title={pageContent.content.listProjectsTitle}
        type={pageContent.content.listProjectsType}
      />
    </div>
  );
}

export default DesignAndConstruction;
