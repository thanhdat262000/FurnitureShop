import axios from "axios";
axios.defaults.baseURL = "http://localhost:1337/";
export const getALLProjectsByService = async (service) => {
  const response = await axios.get(
    `/projects?category.service.name=${service}`
  );
  return response;
};
export const getALLProjectsByCategory = async (category) => {
  const response = await axios.get(`/projects?category.name=${category}`);
  return response;
};
export const getProjectById = async (projectId) => {
  const response = await axios.get(`/projects/${projectId}`);
  return response;
};
export const getLatestProjects = async () => {
  const response = await axios.get("/projects?_sort=created_at:desc");
  return response;
};
