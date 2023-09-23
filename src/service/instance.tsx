import axios from "axios";

const service = axios.create({
  baseURL: "https://cdn.contentful.com",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o`,
  },
});

export default service;
