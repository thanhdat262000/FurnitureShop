import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
function Project({ img, projectType, projectName, category }) {
  const classes = useStyles({ category });
  return (
    <div className={classes.root}>
      <div
        className={classes.container}
        style={{ backgroundImage: "url(/img/project.png)" }}
      >
        <div id="project-overlay" className={classes.overlay}>
          <div>
            <Typography
              component="p"
              align="center"
              className={classes.projectType}
            >
              {projectType}
            </Typography>
            {!category && (
              <Typography
                component="p"
                variant="h5"
                align="center"
                className={classes.projectName}
              >
                {projectName}
              </Typography>
            )}
          </div>
        </div>
      </div>
      {category && (
        <Typography
          component="p"
          variant="h5"
          align="center"
          className={classes.projectName}
        >
          {projectName}
        </Typography>
      )}
    </div>
  );
}

export default Project;
