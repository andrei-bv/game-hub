import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "220d5395a9c1420d9e547b8c15df9b53",
  },
});
