import axios from "axios";

const key = "AIzaSyBj7U1JKOn6b091d0tJrjgcth1JB7MJcYE";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint + "&key=" + key);
  }
};
