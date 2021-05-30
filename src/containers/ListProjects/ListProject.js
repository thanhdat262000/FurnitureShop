import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import React, { useState } from "react";
import Project from "../../components/Project/Project";
import useStyles from "./styles";
function ListProject({ title }) {
  const classes = useStyles();
  const [curCategory, setCurCategory] = useState("design");
  const listProjects = [
    {
      type: "design",
      list: [
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
      ],
    },
    {
      type: "construction",
      list: [
        {
          img: "/img/project.png",
          projectType: "Thi công chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Thi công chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Thi công chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Thi công chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Thi công chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Thi công chung cư",
          projectName: "Cohensive Library",
        },
      ],
    },
    {
      type: "all",
      list: [
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
        {
          img: "/img/project.png",
          projectType: "Nội thất chung cư",
          projectName: "Cohensive Library",
        },
      ],
    },
  ];
  const categories = [
    { name: "Thiết kế nội thất", id: "design" },
    { name: "Thi công nội thất", id: "construction" },
    { name: "Xây nhà trọn gói", id: "all" },
  ];
  const onCategoryClick = (category) => {
    setCurCategory(category);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography component="p" variant="h4" className={classes.title}>
          {title}
        </Typography>
        <div className={classes.categoryRoot}>
          <div className={classes.categoryContainer}>
            {categories.map((category, index) => (
              <div
                className={clsx({
                  [classes.categoryComponent]: true,
                  [classes.categoryComponentActive]:
                    category.id === curCategory,
                })}
                key={index}
                onClick={() => onCategoryClick(category.id)}
              >
                <Typography>{category.name}</Typography>
              </div>
            ))}
          </div>
        </div>
        <Grid container spacing={3}>
          {listProjects
            .filter((list) => list.type === curCategory)[0]
            .list.map((project, index) => (
              <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                <Project
                  key={index}
                  img={project.img}
                  projectType={project.projectType}
                  projectName={project.projectName}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}

export default ListProject;
