import React from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GET_PROJECT_BY_ID } from "../../redux/action";
import { projectsSelector } from "../../redux/selector";
function ProjectPage(props) {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_PROJECT_BY_ID, payload: { projectId: id } });
  }, [dispatch, id]);
  const project = useSelector(projectsSelector);
  console.log(project);
  return (
    <div>{project && <ReactMarkdown>{project.article}</ReactMarkdown>}</div>
  );
}

export default ProjectPage;
