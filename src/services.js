import axios from "axios";

const key = "AIzaSyB14ivyTbSkCnFSDEF5ppuXf5TbYZepw-8";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint + "&key=" + key);
  }
};
