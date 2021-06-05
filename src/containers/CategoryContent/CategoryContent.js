import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Project from "../../components/Project/Project";
import useStyles from "./styles";

function CategoryContent({ serviceType, categoryType }) {
  const classes = useStyles();
  const listProjects = [
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
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title} variant="h4">
            thiết kế nội thất chung cư
          </Typography>
        </div>
        <div className={classes.categoryContainer}>
          <Grid container spacing={3}>
            {listProjects.map((project, index) => (
              <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                <Project
                  category={true}
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
    </div>
  );
}

export default CategoryContent;
