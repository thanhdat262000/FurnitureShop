import { CircularProgress, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import React from "react";
import Project from "../../components/Project/Project";
import useStyles from "./styles";

function ListProject({
  title,
  multipleTypes,
  type,
  categoryList,
  projectList,
  onChangeCategory,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography component="p" variant="h4" className={classes.title}>
          {title}
        </Typography>
        {multipleTypes && (
          <div className={classes.categoryRoot}>
            <div className={classes.categoryContainer}>
              {categoryList.map((category, index) => (
                <div
                  className={clsx({
                    [classes.categoryComponent]: true,
                    [classes.categoryComponentActive]: category.id === type,
                  })}
                  key={index}
                  onClick={() => onChangeCategory(category.id)}
                >
                  <Typography>{category.name}</Typography>
                </div>
              ))}
            </div>
          </div>
        )}
        {!projectList ? (
          <CircularProgress />
        ) : projectList.length > 0 ? (
          <Grid container spacing={3}>
            {projectList.map((project, index) => (
              <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                <Project
                  key={index}
                  img={project.img.url}
                  projectType={project.category.actualName}
                  projectName={project.name}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>No project</Typography>
        )}
      </div>
    </div>
  );
}

export default ListProject;
