import axios from "axios";

export const getLocation = async () => {
  const response = await axios.get("http://api.open-notify.org/iss-now.json");
  return response.data;
};

export const getCrew = async () => {
  const response = await axios.get("http://api.open-notify.org/astros.json");
  return response.data;
};

