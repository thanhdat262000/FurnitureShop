import React from "react";
import Grid from "@material-ui/core/Grid";
import Project from "../../components/Project/Project";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
function ListProject(props) {
  const classes = useStyles();
  const listProjects = [
    {
      img: "/img/project.png",
      projectType: "commercial",
      projectName: "Cohensive Library",
    },
    {
      img: "/img/project.png",
      projectType: "commercial",
      projectName: "Cohensive Library",
    },
    {
      img: "/img/project.png",
      projectType: "commercial",
      projectName: "Cohensive Library",
    },
    {
      img: "/img/project.png",
      projectType: "commercial",
      projectName: "Cohensive Library",
    },
    {
      img: "/img/project.png",
      projectType: "commercial",
      projectName: "Cohensive Library",
    },
    {
      img: "/img/project.png",
      projectType: "commercial",
      projectName: "Cohensive Library",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography component="p" variant="h4" className={classes.title}>
          Latest Projects
        </Typography>
        <Grid container spacing={3}>
          {listProjects.map((project, index) => (
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
