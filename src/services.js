import axios from "axios";

const key = "AIzaSyChc1-NZAN4n1sniKKAxFw_cllODVJf-uk";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint + "&key=" + key);
  }
};
