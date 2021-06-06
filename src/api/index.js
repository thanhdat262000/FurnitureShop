import axios from "axios";
axios.defaults.baseURL = "http://localhost:1337/";
export const getALLProjectsByService = async () => {
  const response = await axios.get("projects/");
};
